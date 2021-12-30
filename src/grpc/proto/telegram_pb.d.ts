// package: telegram
// file: telegram.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

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

export class GetUserRequest extends jspb.Message { 
    getPeer(): string;
    setPeer(value: string): GetUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        peer: string,
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

export class UserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): UserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserResponse;
    static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
    export type AsObject = {
        user?: User.AsObject,
    }
}

export class SendMessageRequest extends jspb.Message { 
    getPeer(): string;
    setPeer(value: string): SendMessageRequest;
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
        peer: string,
        message: string,
    }
}

export class DialogsResponse extends jspb.Message { 
    clearDialogsList(): void;
    getDialogsList(): Array<DialogResponse>;
    setDialogsList(value: Array<DialogResponse>): DialogsResponse;
    addDialogs(value?: DialogResponse, index?: number): DialogResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DialogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DialogsResponse): DialogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DialogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DialogsResponse;
    static deserializeBinaryFromReader(message: DialogsResponse, reader: jspb.BinaryReader): DialogsResponse;
}

export namespace DialogsResponse {
    export type AsObject = {
        dialogsList: Array<DialogResponse.AsObject>,
    }
}

export class DialogResponse extends jspb.Message { 

    hasDialog(): boolean;
    clearDialog(): void;
    getDialog(): Dialog | undefined;
    setDialog(value?: Dialog): DialogResponse;
    getPinned(): boolean;
    setPinned(value: boolean): DialogResponse;
    getFolderid(): number;
    setFolderid(value: number): DialogResponse;
    getArchived(): boolean;
    setArchived(value: boolean): DialogResponse;

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): Message | undefined;
    setMessage(value?: Message): DialogResponse;
    getDate(): number;
    setDate(value: number): DialogResponse;
    getId(): number;
    setId(value: number): DialogResponse;
    getName(): string;
    setName(value: string): DialogResponse;
    getTitle(): string;
    setTitle(value: string): DialogResponse;
    getUnreadcount(): number;
    setUnreadcount(value: number): DialogResponse;
    getUnreadmentionscount(): number;
    setUnreadmentionscount(value: number): DialogResponse;
    getIsuser(): boolean;
    setIsuser(value: boolean): DialogResponse;
    getIsgroup(): boolean;
    setIsgroup(value: boolean): DialogResponse;
    getIschannel(): boolean;
    setIschannel(value: boolean): DialogResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DialogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DialogResponse): DialogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DialogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DialogResponse;
    static deserializeBinaryFromReader(message: DialogResponse, reader: jspb.BinaryReader): DialogResponse;
}

export namespace DialogResponse {
    export type AsObject = {
        dialog?: Dialog.AsObject,
        pinned: boolean,
        folderid: number,
        archived: boolean,
        message?: Message.AsObject,
        date: number,
        id: number,
        name: string,
        title: string,
        unreadcount: number,
        unreadmentionscount: number,
        isuser: boolean,
        isgroup: boolean,
        ischannel: boolean,
    }
}

export class Dialog extends jspb.Message { 
    getPinned(): boolean;
    setPinned(value: boolean): Dialog;
    getUnreadmark(): boolean;
    setUnreadmark(value: boolean): Dialog;
    getTopmessage(): number;
    setTopmessage(value: number): Dialog;
    getReadinboxmaxid(): number;
    setReadinboxmaxid(value: number): Dialog;
    getReadoutboxmaxid(): number;
    setReadoutboxmaxid(value: number): Dialog;
    getUnreadcount(): number;
    setUnreadcount(value: number): Dialog;
    getUnreadmentionscount(): number;
    setUnreadmentionscount(value: number): Dialog;

    hasNotifysettings(): boolean;
    clearNotifysettings(): void;
    getNotifysettings(): NotifySettings | undefined;
    setNotifysettings(value?: NotifySettings): Dialog;
    getPts(): number;
    setPts(value: number): Dialog;
    getFolderid(): number;
    setFolderid(value: number): Dialog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dialog.AsObject;
    static toObject(includeInstance: boolean, msg: Dialog): Dialog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Dialog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dialog;
    static deserializeBinaryFromReader(message: Dialog, reader: jspb.BinaryReader): Dialog;
}

export namespace Dialog {
    export type AsObject = {
        pinned: boolean,
        unreadmark: boolean,
        topmessage: number,
        readinboxmaxid: number,
        readoutboxmaxid: number,
        unreadcount: number,
        unreadmentionscount: number,
        notifysettings?: NotifySettings.AsObject,
        pts: number,
        folderid: number,
    }
}

export class NotifySettings extends jspb.Message { 
    getShowpreviews(): boolean;
    setShowpreviews(value: boolean): NotifySettings;
    getSilent(): boolean;
    setSilent(value: boolean): NotifySettings;
    getMuteuntil(): number;
    setMuteuntil(value: number): NotifySettings;
    getSound(): string;
    setSound(value: string): NotifySettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotifySettings.AsObject;
    static toObject(includeInstance: boolean, msg: NotifySettings): NotifySettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotifySettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotifySettings;
    static deserializeBinaryFromReader(message: NotifySettings, reader: jspb.BinaryReader): NotifySettings;
}

export namespace NotifySettings {
    export type AsObject = {
        showpreviews: boolean,
        silent: boolean,
        muteuntil: number,
        sound: string,
    }
}

export class Message extends jspb.Message { 
    getOut(): boolean;
    setOut(value: boolean): Message;
    getMentioned(): boolean;
    setMentioned(value: boolean): Message;
    getMediaunread(): boolean;
    setMediaunread(value: boolean): Message;
    getSilent(): boolean;
    setSilent(value: boolean): Message;
    getFromscheduled(): boolean;
    setFromscheduled(value: boolean): Message;
    getLegacy(): boolean;
    setLegacy(value: boolean): Message;
    getEdithide(): boolean;
    setEdithide(value: boolean): Message;
    getPinned(): boolean;
    setPinned(value: boolean): Message;
    getViabotid(): boolean;
    setViabotid(value: boolean): Message;
    getDate(): number;
    setDate(value: number): Message;
    getMessage(): string;
    setMessage(value: string): Message;
    getViews(): number;
    setViews(value: number): Message;
    getForwards(): number;
    setForwards(value: number): Message;
    getEditdate(): number;
    setEditdate(value: number): Message;
    getPostauthor(): string;
    setPostauthor(value: string): Message;
    getGroupedid(): number;
    setGroupedid(value: number): Message;
    getTtlperiod(): number;
    setTtlperiod(value: number): Message;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        out: boolean,
        mentioned: boolean,
        mediaunread: boolean,
        silent: boolean,
        fromscheduled: boolean,
        legacy: boolean,
        edithide: boolean,
        pinned: boolean,
        viabotid: boolean,
        date: number,
        message: string,
        views: number,
        forwards: number,
        editdate: number,
        postauthor: string,
        groupedid: number,
        ttlperiod: number,
    }
}
