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
    me: ITelegramService_IMe;
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
interface ITelegramService_ISign extends grpc.MethodDefinition<telegram_pb.SignMessage, telegram_pb.Result> {
    path: "/telegram.Telegram/Sign";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<telegram_pb.SignMessage>;
    requestDeserialize: grpc.deserialize<telegram_pb.SignMessage>;
    responseSerialize: grpc.serialize<telegram_pb.Result>;
    responseDeserialize: grpc.deserialize<telegram_pb.Result>;
}
interface ITelegramService_IMe extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, telegram_pb.MeResponse> {
    path: "/telegram.Telegram/Me";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<telegram_pb.MeResponse>;
    responseDeserialize: grpc.deserialize<telegram_pb.MeResponse>;
}

export const TelegramService: ITelegramService;

export interface ITelegramServer {
    login: grpc.handleUnaryCall<telegram_pb.LoginMessage, telegram_pb.Result>;
    sign: grpc.handleUnaryCall<telegram_pb.SignMessage, telegram_pb.Result>;
    me: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, telegram_pb.MeResponse>;
}

export interface ITelegramClient {
    login(request: telegram_pb.LoginMessage, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    login(request: telegram_pb.LoginMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    login(request: telegram_pb.LoginMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    sign(request: telegram_pb.SignMessage, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    sign(request: telegram_pb.SignMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    sign(request: telegram_pb.SignMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    me(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: telegram_pb.MeResponse) => void): grpc.ClientUnaryCall;
    me(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.MeResponse) => void): grpc.ClientUnaryCall;
    me(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.MeResponse) => void): grpc.ClientUnaryCall;
}

export class TelegramClient extends grpc.Client implements ITelegramClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public login(request: telegram_pb.LoginMessage, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public login(request: telegram_pb.LoginMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public login(request: telegram_pb.LoginMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public sign(request: telegram_pb.SignMessage, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public sign(request: telegram_pb.SignMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public sign(request: telegram_pb.SignMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.Result) => void): grpc.ClientUnaryCall;
    public me(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: telegram_pb.MeResponse) => void): grpc.ClientUnaryCall;
    public me(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: telegram_pb.MeResponse) => void): grpc.ClientUnaryCall;
    public me(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: telegram_pb.MeResponse) => void): grpc.ClientUnaryCall;
}
