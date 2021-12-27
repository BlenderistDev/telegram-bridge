import { Telegram } from './src/telegram/telegram'
import { startServer } from './src/grpc/server'
import { loadEnv } from './src/config/config'
import { KafkaProducer } from './src/kafka/kafka';

(async function () {
  loadEnv()
  const kafkaProducer = await KafkaProducer.init()
  const telegram = await Telegram.createTelegramClient(kafkaProducer)
  startServer(telegram)
})()
