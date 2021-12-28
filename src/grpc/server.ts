import * as grpc from 'grpc'

import { sendUnaryData, ServerUnaryCall } from 'grpc'
import { ITelegramServer, TelegramService } from './proto/telegram_grpc_pb'
import { LoginMessage, MeResponse, Result, SendMessageRequest, SignMessage, User } from './proto/telegram_pb'
import { Telegram } from '../telegram/telegram'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'

class ServerImpl implements ITelegramServer {
  private tgClient: Telegram

  public constructor (client: Telegram) {
    this.tgClient = client
  }

  public login (call: grpc.ServerUnaryCall<LoginMessage>, callback: grpc.sendUnaryData<Result>) {
    this.tgClient.login(call.request.getPhone())

    const result = new Result()
    result.setSuccess(true)

    callback(null, result)
  }

  sign (call: ServerUnaryCall<SignMessage>, callback: sendUnaryData<Result>): void {
    this.tgClient.sign(call.request.getCode())

    const result = new Result()
    result.setSuccess(true)

    callback(null, result)
  }

  async me (call: ServerUnaryCall<Empty>, callback: sendUnaryData<MeResponse>): Promise<void> {
    const me = await this.tgClient.getMe()
    const user = new User()

    user.setId(me.id.toString())
    user.setAccesshash(me.accessHash.toString())
    user.setFirstname(me.firstName === null ? '' : me.firstName.toString())
    user.setLastname(me.lastName === null ? '' : me.lastName.toString())
    user.setPhone(me.phone.toString())
    user.setSelf(me.self)
    user.setContact(me.contact)
    user.setMutualcontact(me.mutualContact)
    user.setDeleted(me.deleted)
    user.setBot(me.bot)
    user.setBotchathistory(me.bot)
    user.setBotnochats(me.botNochats)
    user.setVerified(me.verified)
    user.setRestricted(me.restricted)
    user.setMin(me.min)
    user.setBotinlinegeo(me.botInlineGeo)
    user.setSupport(me.support)
    user.setScam(me.scam)
    user.setApplyminphoto(me.applyMinPhoto)
    user.setFake(me.fake)

    const result = new MeResponse()
    result.setUser(user)

    callback(null, result)
  }

  async send (call: ServerUnaryCall<SendMessageRequest>, callback: sendUnaryData<Result>): Promise<void> {
    await this.tgClient.sendMessage(call.request.getPeer(), call.request.getMessage())

    const result = new Result()
    result.setSuccess(true)

    callback(null, result)
  }
}

export function startServer (client: Telegram) {
  const server = new grpc.Server()

  server.addService(TelegramService, new ServerImpl(client))
  server.bind(process.env.GRPC_HOST, grpc.ServerCredentials.createInsecure())
  server.start()

  console.log('Server started, listening: ' + process.env.GRPC_HOST)
}

process.on('uncaughtException', (err) => {
  console.log(`process on uncaughtException error: ${err}`)
})

process.on('unhandledRejection', (err) => {
  console.log(`process on unhandledRejection error: ${err}`)
})
