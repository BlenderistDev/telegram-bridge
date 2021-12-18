import * as grpc from "grpc";

import {sendUnaryData, ServerUnaryCall} from "grpc";
import {ITelegramServer, TelegramService} from "./proto/telegram_grpc_pb";
import {LoginMessage, Result, SignMessage} from "./proto/telegram_pb";
import {Telegram} from "../telegram/telegram";

class ServerImpl implements ITelegramServer {
    private tgClient: Telegram

    public constructor(client: Telegram) {
        this.tgClient = client
    }

    public login(call: grpc.ServerUnaryCall<LoginMessage>, callback: grpc.sendUnaryData<Result>) {
        this.tgClient.login(call.request.getPhone())

        const result = new Result();
        result.setSuccess(true)

        callback(null, result);
    }

    sign(call: ServerUnaryCall<SignMessage>, callback: sendUnaryData<Result>): void {
        this.tgClient.sign(call.request.getCode())

        const result = new Result();
        result.setSuccess(true)

        callback(null, result);
    }
}

export function startServer(client: Telegram) {
    const server = new grpc.Server();

    server.addService(TelegramService, new ServerImpl(client));
    server.bind(process.env.GRPC_HOST, grpc.ServerCredentials.createInsecure());
    server.start();

    console.log("Server started, listening: " + process.env.GRPC_HOST);
}

process.on("uncaughtException", (err) => {
    console.log(`process on uncaughtException error: ${err}`);
});

process.on("unhandledRejection", (err) => {
    console.log(`process on unhandledRejection error: ${err}`);
});
