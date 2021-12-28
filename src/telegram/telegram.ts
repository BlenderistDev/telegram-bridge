import { Api, TelegramClient } from 'telegram'
import { StringSession } from 'telegram/sessions'
import { Auth } from './auth/auth'
import { loadSession, saveSession } from './auth/session'
import { transformEvent } from './eventTransformer'
import User = Api.User;
import { TotalList } from 'telegram/Helpers'
import { Dialog } from 'telegram/tl/custom/dialog'
import { KafkaProducer } from '../kafka/kafka'
import { EntityLike } from 'telegram/define'

export class Telegram {
  private kafkaTopic = 'telegram-event'
  private client: TelegramClient
  private auth: Auth
  private kafkaProducer: KafkaProducer

  private constructor (kafkaProducer: KafkaProducer) {
    this.auth = new Auth()
    this.kafkaProducer = kafkaProducer
  }

  public static createTelegramClient (kafkaProducer: KafkaProducer): Promise<Telegram> {
    const telegram = new Telegram(kafkaProducer)
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

  public login (phone: string) {
    this.auth.login(phone)
  }

  public sign (code: string) {
    this.auth.sing(code)
  }

  public getMe (): Promise<User> {
    return this.client
      .getMe(false)
      .then(me => me instanceof User ? me : null)
  }

  public getDialogs (): Promise<TotalList<Dialog>> {
    return this.client
      .getDialogs({})
  }

  public getUser (peer: EntityLike): Promise<Api.TypeInputPeer> {
    return this.client.getInputEntity(peer)
  }

  public sendMessage (peer: EntityLike, message: string) {
    return this.client.sendMessage(peer, { message: message })
  }
}
