import { Telegram } from './src/telegram/telegram'
import { startServer } from './src/grpc/server'
import { loadEnv } from './src/config/config'
import { KafkaProducer } from './src/kafka/kafka'
import { Auth } from './src/telegram/auth/auth'

(async function () {
  loadEnv()
  const kafkaProducer = await KafkaProducer.init()
  const auth = new Auth()
  const telegram = Telegram.createTelegramClient(kafkaProducer, auth)
  startServer(telegram, auth)
})()
