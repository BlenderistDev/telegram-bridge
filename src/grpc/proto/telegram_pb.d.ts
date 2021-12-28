// package: telegram
// file: telegram.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class LoginMessage extends jspb.Message { 
    getPhone(): string;
    setPhone(value: string): LoginMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginMessage.AsObject;
    static toObject(includeInstance: boolean, msg: LoginMessage): LoginMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginMessage;
    static deserializeBinaryFromReader(message: LoginMessage, reader: jspb.BinaryReader): LoginMessage;
}

export namespace LoginMessage {
    export type AsObject = {
        phone: string,
    }
}

export class SignMessage extends jspb.Message { 
    getCode(): string;
    setCode(value: string): SignMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignMessage.AsObject;
    static toObject(includeInstance: boolean, msg: SignMessage): SignMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignMessage;
    static deserializeBinaryFromReader(message: SignMessage, reader: jspb.BinaryReader): SignMessage;
}

export namespace SignMessage {
    export type AsObject = {
        code: string,
    }
}

export class Result extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): Result;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Result.AsObject;
    static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Result;
    static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
    export type AsObject = {
        success: boolean,
    }
}

export class User extends jspb.Message { 
    getSelf(): boolean;
    setSelf(value: boolean): User;
    getContact(): boolean;
    setContact(value: boolean): User;
    getMutualcontact(): boolean;
    setMutualcontact(value: boolean): User;
    getDeleted(): boolean;
    setDeleted(value: boolean): User;
    getBot(): boolean;
    setBot(value: boolean): User;
    getBotchathistory(): boolean;
    setBotchathistory(value: boolean): User;
    getBotnochats(): boolean;
    setBotnochats(value: boolean): User;
    getVerified(): boolean;
    setVerified(value: boolean): User;
    getRestricted(): boolean;
    setRestricted(value: boolean): User;
    getMin(): boolean;
    setMin(value: boolean): User;
    getBotinlinegeo(): boolean;
    setBotinlinegeo(value: boolean): User;
    getSupport(): boolean;
    setSupport(value: boolean): User;
    getScam(): boolean;
    setScam(value: boolean): User;
    getApplyminphoto(): boolean;
    setApplyminphoto(value: boolean): User;
    getFake(): boolean;
    setFake(value: boolean): User;
    getId(): string;
    setId(value: string): User;
    getAccesshash(): string;
    setAccesshash(value: string): User;
    getFirstname(): string;
    setFirstname(value: string): User;
    getLastname(): string;
    setLastname(value: string): User;
    getPhone(): string;
    setPhone(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        self: boolean,
        contact: boolean,
        mutualcontact: boolean,
        deleted: boolean,
        bot: boolean,
        botchathistory: boolean,
        botnochats: boolean,
        verified: boolean,
        restricted: boolean,
        min: boolean,
        botinlinegeo: boolean,
        support: boolean,
        scam: boolean,
        applyminphoto: boolean,
        fake: boolean,
        id: string,
        accesshash: string,
        firstname: string,
        lastname: string,
        phone: string,
    }
}

export class MeResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): MeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MeResponse): MeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MeResponse;
    static deserializeBinaryFromReader(message: MeResponse, reader: jspb.BinaryReader): MeResponse;
}

export namespace MeResponse {
    export type AsObject = {
        user?: User.AsObject,
    }
}

export class SendMessageRequest extends jspb.Message { 

    hasPeer(): boolean;
    clearPeer(): void;
    getPeer(): google_protobuf_any_pb.Any | undefined;
    setPeer(value?: google_protobuf_any_pb.Any): SendMessageRequest;
    getMessage(): string;
    setMessage(value: string): SendMessageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
    static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
    export type AsObject = {
        peer?: google_protobuf_any_pb.Any.AsObject,
        message: string,
    }
}
