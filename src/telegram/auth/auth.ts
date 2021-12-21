import {EventEmitter} from 'events';

export class Auth {

    private emitter: EventEmitter

    public constructor() {
        this.emitter = new EventEmitter()
    }

    public login(phone: string) {
        this.emitter.emit("phone", phone)
    }

    public sing(code: string) {
        this.emitter.emit("code", code)
    }

    public getPhone() {
        return new Promise<string>(resolve => this.emitter.on("phone", (phone: string) => resolve(phone)))
    }

    public getCode() {
        return new Promise<string>(resolve => this.emitter.on("code", (phone: string) => resolve(phone)))
    }
}
