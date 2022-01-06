import { Api, TelegramClient } from 'telegram'
import { StringSession } from 'telegram/sessions'
import { Auth } from './auth/auth'
import { loadSession, saveSession } from './auth/session'
import { transformEvent } from './eventTransformer'
import { TotalList } from 'telegram/Helpers'
import { Dialog } from 'telegram/tl/custom/dialog'
import { KafkaProducer } from '../kafka/kafka'
import { Entity, EntityLike } from 'telegram/define'

export class Telegram {
  private kafkaTopic = 'telegram-event'
  private client: TelegramClient
  private auth: Auth
  private kafkaProducer: KafkaProducer

  private constructor (kafkaProducer: KafkaProducer, auth: Auth) {
    this.auth = auth
    this.kafkaProducer = kafkaProducer
  }

  public static createTelegramClient (kafkaProducer: KafkaProducer, auth: Auth): Promise<Telegram> {
    const telegram = new Telegram(kafkaProducer, auth)
    return telegram.initClient().then(() => telegram)
  }

  private async initClient () {
    const apiId = parseInt(process.env.APP_ID)
    const apiHash = process.env.APP_HASH

    const stringSession = new StringSession(loadSession())

    this.client = new TelegramClient(stringSession, apiId, apiHash, { connectionRetries: 5 })

    await this.client.start({
      phoneNumber: async () => await this.auth.getPhone(),
      phoneCode: async () => await this.auth.getCode(),
      onError: (err) => console.log(err)
    })

    this.client.addEventHandler((update: Api.TypeUpdate) => {
      const event = transformEvent(update)
      this.kafkaProducer.send(this.kafkaTopic, JSON.stringify(event))
    })

    saveSession(<string><unknown> this.client.session.save())
  }

  public getDialogs (): Promise<TotalList<Dialog>> {
    return this.client
      .getDialogs({})
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
}
