// package: telegram
// file: telegram.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as telegram_pb from "./telegram_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ITelegramService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: ITelegramService_ILogin;
    sign: ITelegramService_ISign;
    getUser: ITelegramService_IGetUser;
    send: ITelegramService_ISend;
    getDialogs: ITelegramService_IgetDialogs;
    muteUser: ITelegramService_IMuteUser;
    muteChat: ITelegramService_IMuteChat;
}

interface ITelegramService_ILogin extends grpc.MethodDefinition<telegram_pb.LoginMessage, telegram_pb.Result> {
    path: "/telegram.Telegram/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<telegram_pb.LoginMessage>;
    requestDeserialize: grpc.deserialize<telegram_pb.LoginMessage>;
    responseSerialize: grpc.serialize<telegram_pb.Result>;
    responseDeserialize: grpc.deserialize<telegram_pb.Result>;
}
interface ITelegramService_ISign extends grpc.MethodDefinition<telegram_pb.SignMessage, telegram_pb.SignResult> {
    path: "/telegram.Telegram/Sign";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<telegram_pb.SignMessage>;
    requestDeserialize: grpc.deserialize<telegram_pb.SignMessage>;
    responseSerialize: grpc.serialize<telegram_pb.SignResult>;
    responseDeserialize: grpc.deserialize<telegram_pb.SignResult>;
}
interface ITelegramService_IGetUser extends grpc.MethodDefinition<telegram_pb.GetUserRequest, telegram_pb.UserResponse> {
    path: "/telegram.Telegram/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<telegram_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<telegram_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<telegram_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<telegram_pb.UserResponse>;
}
interface ITelegramService_ISend extends grpc.MethodDefinition<telegram_pb.SendMessageRequest, telegram_pb.Result> {
    path: "/telegram.Telegram/Send";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<telegram_pb.SendMessageRequest>;
    requestDeserialize: grpc.deserialize<telegram_pb.SendMessageRequest>;
    responseSerialize: grpc.serialize<telegram_pb.Result>;
    responseDeserialize: grpc.deserialize<telegram_pb.Result>;
}
interface ITelegramService_IgetDialogs extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, telegram_pb.DialogsResponse> {
    path: "/telegram.Telegram/getDialogs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<telegram_pb.DialogsResponse>;
    responseDeserialize: grpc.deserialize<telegram_pb.DialogsResponse>;
}
interface ITelegramService_IMuteUser extends grpc.MethodDefinition<telegram_pb.MuteUserRequest, telegram_pb.Result> {
    path: "/telegram.Telegram/MuteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<telegram_pb.MuteUserRequest>;
    requestDeserialize: grpc.deserialize<telegram_pb.MuteUserRequest>;
    responseSerialize: grpc.serialize<telegram_pb.Result>;
    responseDeserialize: grpc.deserialize<telegram_pb.Result>;
}
interface ITelegramService_IMuteChat extends grpc.MethodDefinition<telegram_pb.MuteChatRequest, telegram_pb.Result> {
    path: "/telegram.Telegram/MuteChat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<telegram_pb.MuteChatRequest>;
    requestDeserialize: grpc.deserialize<telegram_pb.MuteChatRequest>;
    responseSerialize: grpc.serialize<telegram_pb.Result>;
    responseDeserialize: grpc.deserialize<telegram_pb.Result>;
}

export const TelegramService: ITelegramService;

export interface ITelegramServer {
    login: grpc.handleUnaryCall<telegram_pb.LoginMessage, telegram_pb.Result>;
    sign: grpc.handleUnaryCall<telegram_pb.SignMessage, telegram_pb.SignResult>;
    getUser: grpc.handleUnaryCall<telegram_pb.GetUserRequest, telegram_pb.UserResponse>;
    send: grpc.handleUnaryCall<telegram_pb.SendMessageRequest, telegram_pb.Result>;
    getDialogs: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, telegram_pb.DialogsResponse>;
    muteUser: grpc.handleUnaryCall<telegram_pb.MuteUserRequest, telegram_pb.Result>;
    muteChat: grpc.handleUnaryCall<telegram_pb.MuteChatRequest, telegram_pb.Result>;
}

export interface ITelegramClient {
    login(request: telegram_pb.LoginMessage, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    login(request: telegram_pb.LoginMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    login(request: telegram_pb.LoginMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    sign(request: telegram_pb.SignMessage, callback: (error: grpc.ServiceError | null, response: telegram_pb.SignResult) => void): grpc.ClientUnaryCall;
    sign(request: telegram_pb.SignMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.SignResult) => void): grpc.ClientUnaryCall;
    sign(request: telegram_pb.SignMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.SignResult) => void): grpc.ClientUnaryCall;
    getUser(request: telegram_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: telegram_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: telegram_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: telegram_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.UserResponse) => void): grpc.ClientUnaryCall;
    send(request: telegram_pb.SendMessageRequest, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    send(request: telegram_pb.SendMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    send(request: telegram_pb.SendMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    getDialogs(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: telegram_pb.DialogsResponse) => void): grpc.ClientUnaryCall;
    getDialogs(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.DialogsResponse) => void): grpc.ClientUnaryCall;
    getDialogs(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.DialogsResponse) => void): grpc.ClientUnaryCall;
    muteUser(request: telegram_pb.MuteUserRequest, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    muteUser(request: telegram_pb.MuteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    muteUser(request: telegram_pb.MuteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    muteChat(request: telegram_pb.MuteChatRequest, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    muteChat(request: telegram_pb.MuteChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    muteChat(request: telegram_pb.MuteChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
}

export class TelegramClient extends grpc.Client implements ITelegramClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public login(request: telegram_pb.LoginMessage, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public login(request: telegram_pb.LoginMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public login(request: telegram_pb.LoginMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public sign(request: telegram_pb.SignMessage, callback: (error: grpc.ServiceError | null, response: telegram_pb.SignResult) => void): grpc.ClientUnaryCall;
    public sign(request: telegram_pb.SignMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.SignResult) => void): grpc.ClientUnaryCall;
    public sign(request: telegram_pb.SignMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.SignResult) => void): grpc.ClientUnaryCall;
    public getUser(request: telegram_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: telegram_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: telegram_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: telegram_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public send(request: telegram_pb.SendMessageRequest, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public send(request: telegram_pb.SendMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public send(request: telegram_pb.SendMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public getDialogs(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: telegram_pb.DialogsResponse) => void): grpc.ClientUnaryCall;
    public getDialogs(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.DialogsResponse) => void): grpc.ClientUnaryCall;
    public getDialogs(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.DialogsResponse) => void): grpc.ClientUnaryCall;
    public muteUser(request: telegram_pb.MuteUserRequest, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public muteUser(request: telegram_pb.MuteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public muteUser(request: telegram_pb.MuteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public muteChat(request: telegram_pb.MuteChatRequest, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public muteChat(request: telegram_pb.MuteChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public muteChat(request: telegram_pb.MuteChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
}
