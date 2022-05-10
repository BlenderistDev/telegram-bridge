import { Api, TelegramClient } from 'telegram'
import { Auth } from './auth/auth'
import { transformEvent } from './eventTransformer'
import { TotalList } from 'telegram/Helpers'
import { Dialog } from 'telegram/tl/custom/dialog'
import { KafkaProducer } from '../kafka/kafka'
import { Entity, EntityLike } from 'telegram/define'
import { StringSession } from "telegram/sessions";

const kafkaTopic = 'telegram-event'

export class Telegram {
  private readonly kafkaTopic: string
  private client: TelegramClient
  private readonly auth: Auth
  private kafkaProducer: KafkaProducer
  private readonly session: string

  private constructor (id: string, kafkaProducer: KafkaProducer, auth: Auth, session: string) {
    this.auth = auth
    this.kafkaProducer = kafkaProducer
    this.session = session
    this.kafkaTopic = `${kafkaTopic}-${id}`
  }

  public static createTelegramClient (id: string, kafkaProducer: KafkaProducer, auth: Auth, session: string): Promise<Telegram> {
    const telegram = new Telegram(id, kafkaProducer, auth, session)
    return telegram.initClient().then(() => telegram)
  }

  private async initClient () {
    const apiId = parseInt(process.env.APP_ID)
    const apiHash = process.env.APP_HASH

    const session = new StringSession(this.session)
    this.client = new TelegramClient(session, apiId, apiHash, { connectionRetries: 5 })

    await this.client.start({
      phoneNumber: async () => await this.auth.getPhone(),
      phoneCode: async () => await this.auth.getCode(),
      onError: (err) => console.log(err)
    })

    this.client.addEventHandler((update: Api.TypeUpdate) => {
      const event = transformEvent(update)
      this.kafkaProducer.send(this.kafkaTopic, JSON.stringify(event))
    })
  }

  public getSession(): string {
    return <string><unknown> this.client.session.save()
  }

  public getDialogs (): Promise<TotalList<Dialog>> {
    return this.client
      .getDialogs({})
  }

  public getChats () {
    return this.client
      .invoke(new Api.messages.GetAllChats({
        exceptIds: []
      }))
  }

  public getUser (peer: EntityLike): Promise<Entity> {
    return this.client.getEntity(peer)
  }

  public sendMessage (peer: EntityLike, message: string) {
    return this.client.sendMessage(peer, { message: message })
  }

  public setNotifySettings (peer: Api.TypeInputNotifyPeer, settings: Api.TypeInputPeerNotifySettings) {
    return this.client.invoke(new Api.account.UpdateNotifySettings({
      peer: peer,
      settings: settings
    }))
  }

  public getAuth(): Auth {
    return this.auth
  }
}
