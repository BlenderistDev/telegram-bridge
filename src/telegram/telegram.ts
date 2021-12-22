import {Api, TelegramClient} from "telegram";
import {StringSession} from "telegram/sessions";
import {Auth} from "./auth/auth";
import {loadSession, saveSession} from "./auth/session";
import {transform} from "./eventTransformer";
import User = Api.User;
import {TotalList} from "telegram/Helpers";
import {Dialog} from "telegram/tl/custom/dialog";

export class Telegram {
    private client: TelegramClient
    private auth: Auth

    private constructor() {
        this.auth = new Auth()
    }

    public static createTelegramClient(): Promise<Telegram> {
        const telegram = new Telegram();
        return telegram.initClient().then(() => telegram)
    }

    private async initClient() {
        const apiId = parseInt(process.env.APP_ID)
        const apiHash = process.env.APP_HASH

        const stringSession = new StringSession(loadSession())

        this.client = new TelegramClient(stringSession, apiId, apiHash, { connectionRetries: 5 });

        await this.client.start({
            phoneNumber: async () => await this.auth.getPhone(),
            phoneCode: async () => await this.auth.getCode(),
            onError: (err) => console.log(err),
        });

        this.client.addEventHandler((update: Api.TypeUpdate) => {
            const event = transform(update)
        });

        saveSession(<string><unknown>this.client.session.save())
    }

    public login(phone: string) {
        this.auth.login(phone)
    }

    public sign(code: string) {
        this.auth.sing(code)
    }

    public getMe(): Promise<User> {
        return this.client
            .getMe(false)
            .then(me => me instanceof User ? me : null)
    }

    public getDialogs(): Promise<TotalList<Dialog>> {
        return this.client
            .getDialogs({})
    }
}
