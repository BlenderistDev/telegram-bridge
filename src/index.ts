import { Telegram } from './telegram/telegram'
import { startServer } from './grpc/server'
import { loadEnv } from './config/config'
import { KafkaProducer } from './kafka/kafka'
import { Auth } from './telegram/auth/auth'

(async function () {
  loadEnv()
  const kafkaProducer = await KafkaProducer.init()
  const auth = new Auth()
  const telegram = Telegram.createTelegramClient(kafkaProducer, auth)
  startServer(telegram, auth)
})()
