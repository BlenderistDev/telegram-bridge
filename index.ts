import {Telegram} from "./src/telegram/telegram"
import {startServer} from "./src/grpc/server"
import {loadEnv} from "./src/config/config"

loadEnv()

const telegram = new Telegram()

startServer(telegram)
