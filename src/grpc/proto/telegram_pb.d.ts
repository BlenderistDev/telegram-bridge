// package: telegram
// file: telegram.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

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
