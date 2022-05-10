import * as grpc from 'grpc'

import { sendUnaryData, ServerUnaryCall } from 'grpc'
import { ITelegramServer, TelegramService } from './proto/telegram_grpc_pb'
import {
  Dialog,
  DialogResponse,
  DialogsResponse,
  GetUserRequest,
  LoginMessage, MuteChatRequest, MuteUserRequest, NotifySettings,
  Result,
  SendMessageRequest,
  SignMessage, SignResult,
  User,
  UserResponse
} from './proto/telegram_pb'
import { Api } from 'telegram'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { mute, unMute } from './notifySettings/factory'
import {ClientPool} from "../telegram/clientPool";

class ServerImpl implements ITelegramServer {
  private clientPool: ClientPool;

  public constructor (clientPool: ClientPool) {
    this.clientPool = clientPool
  }

  public login (call: grpc.ServerUnaryCall<LoginMessage>, callback: grpc.sendUnaryData<Result>) {
    const userId = call.metadata.get("userId").pop().toString()
    const session = call.metadata.get("session").pop().toString()
    this.clientPool.getClient(userId, session)
      .then(client => client.getAuth().login(call.request.getPhone()))

    const result = new Result()
    result.setSuccess(true)

    callback(null, result)
  }

  async sign (call: ServerUnaryCall<SignMessage>, callback: sendUnaryData<SignResult>): Promise<void> {
    const userId = call.metadata.get("userId").pop().toString()
    const session = call.metadata.get("session").pop().toString()

    const client = await this.clientPool.getClient(userId, session)

    client.getAuth().login(call.request.getCode())

    const result = new SignResult()
    result.setSession(client.getSession())

    callback(null, result)
  }

  async send (call: ServerUnaryCall<SendMessageRequest>, callback: sendUnaryData<Result>): Promise<void> {
    const userId = call.metadata.get("userId").pop().toString()
    const session = call.metadata.get("session").pop().toString()
    this.clientPool.getClient(userId, session)
      .then(client => client.sendMessage(call.request.getPeer(), call.request.getMessage()))

    const result = new Result()
    result.setSuccess(true)

    callback(null, result)
  }

  async getUser (call: ServerUnaryCall<GetUserRequest>, callback: sendUnaryData<UserResponse>) {
    const userId = call.metadata.get("userId").pop().toString()
    const session = call.metadata.get("session").pop().toString()
    const tgUser = await this.clientPool.getClient(userId, session)
      .then(client => client.getUser(call.request.getPeer()))

    if (tgUser instanceof Api.User) {
      const responseUser = new User()
      responseUser.setId(tgUser.id.toString())
      responseUser.setAccesshash(tgUser.accessHash.toString())
      responseUser.setFirstname(tgUser.firstName === null ? '' : tgUser.firstName.toString())
      responseUser.setLastname(tgUser.lastName === null ? '' : tgUser.lastName.toString())
      responseUser.setPhone(tgUser.phone.toString())
      responseUser.setSelf(tgUser.self)
      responseUser.setContact(tgUser.contact)
      responseUser.setMutualcontact(tgUser.mutualContact)
      responseUser.setDeleted(tgUser.deleted)
      responseUser.setBot(tgUser.bot)
      responseUser.setBotchathistory(tgUser.bot)
      responseUser.setBotnochats(tgUser.botNochats)
      responseUser.setVerified(tgUser.verified)
      responseUser.setRestricted(tgUser.restricted)
      responseUser.setMin(tgUser.min)
      responseUser.setBotinlinegeo(tgUser.botInlineGeo)
      responseUser.setSupport(tgUser.support)
      responseUser.setScam(tgUser.scam)
      responseUser.setApplyminphoto(tgUser.applyMinPhoto)
      responseUser.setFake(tgUser.fake)

      const response = new UserResponse()
      response.setUser(responseUser)

      callback(null, response)
    } else {
      callback(new Error('unknown type'), null)
    }
  }

  async getDialogs (call: ServerUnaryCall<Empty>, callback: sendUnaryData<DialogsResponse>): Promise<void> {
    const dialogList: Array<DialogResponse> = []
    const userId = call.metadata.get("userId").pop().toString()
    const session = call.metadata.get("session").pop().toString()
    const client = await this.clientPool.getClient(userId, session)
      client.getDialogs()
      .then(dialogs => dialogs.forEach(dialog => {
        const dialogEntity = new Dialog()
        dialogEntity.setPinned(dialog.dialog.pinned)
        dialogEntity.setUnreadmark(dialog.dialog.unreadMark)
        dialogEntity.setTopmessage(dialog.dialog.topMessage)
        dialogEntity.setReadinboxmaxid(dialog.dialog.readInboxMaxId)
        dialogEntity.setReadoutboxmaxid(dialog.dialog.readOutboxMaxId)
        dialogEntity.setUnreadcount(dialog.dialog.unreadCount)
        dialogEntity.setUnreadmentionscount(dialog.dialog.unreadMentionsCount)
        dialogEntity.setPts(dialog.dialog.pts)
        dialogEntity.setFolderid(dialog.dialog.folderId)

        const notifySettings = new NotifySettings()
        notifySettings.setShowpreviews(dialog.dialog.notifySettings.showPreviews)
        notifySettings.setSilent(dialog.dialog.notifySettings.silent)
        notifySettings.setMuteuntil(dialog.dialog.notifySettings.muteUntil)
        notifySettings.setSound(dialog.dialog.notifySettings.sound)

        dialogEntity.setNotifysettings(notifySettings)

        const dialogResponse = new DialogResponse()
        dialogResponse.setDialog(dialogEntity)
        dialogResponse.setPinned(dialog.pinned)
        dialogResponse.setFolderid(dialog.folderId)
        dialogResponse.setArchived(dialog.archived)
        // @ todo message
        dialogResponse.setDate(dialog.date)
        // @todo id
        dialogResponse.setName(dialog.name)
        dialogResponse.setTitle(dialog.title)
        dialogResponse.setUnreadcount(dialog.unreadCount)
        dialogResponse.setUnreadmentionscount(dialog.unreadMentionsCount)
        dialogResponse.setIsuser(dialog.isUser)
        dialogResponse.setIsgroup(dialog.isGroup)
        dialogResponse.setIschannel(dialog.isChannel)

        dialogList.push(dialogResponse)
      }))

    const response = new DialogsResponse()
    response.setDialogsList(dialogList)
    callback(null, response)
  }

  async muteUser (call: ServerUnaryCall<MuteUserRequest>, callback: sendUnaryData<Result>): Promise<void> {
    const peer = new Api.InputNotifyPeer({
      peer: new Api.InputPeerUser({
        // @ts-ignore
        userId: call.request.getId(),
        // @ts-ignore
        accessHash: call.request.getAccesshash()
      })
    })

    await this.mute(call, peer, callback)
  }

  async muteChat (call: ServerUnaryCall<MuteChatRequest>, callback: sendUnaryData<Result>): Promise<void> {
    const peer = new Api.InputNotifyPeer({
      peer: new Api.InputPeerChat({
        // @ts-ignore
        chatId: call.request.getId()
      })
    })

    await this.mute(call, peer, callback)
  }

  private async mute (call: ServerUnaryCall<MuteChatRequest|MuteUserRequest>, peer: Api.InputNotifyPeer, callback: sendUnaryData<Result>) {
    let settings: Api.InputPeerNotifySettings
    if (call.request.getUnmute()) {
      settings = unMute
    } else {
      settings = mute
    }

    const userId = call.metadata.get("userId").pop().toString()
    const session = call.metadata.get("session").pop().toString()

    const client = await this.clientPool.getClient(userId, session)
    const res = await client.setNotifySettings(peer, settings)

    const response = new Result()
    response.setSuccess(res)
    callback(null, response)
  }
}

export function startServer (client: ClientPool) {
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
