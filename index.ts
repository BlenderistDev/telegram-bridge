import {Telegram} from "./src/telegram/telegram"
import {startServer} from "./src/grpc/server"
import {loadEnv} from "./src/config/config"

(async function () {
    loadEnv()
    const telegram = await Telegram.createTelegramClient()
    startServer(telegram)
})()
