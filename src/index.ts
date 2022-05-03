import { startServer } from './grpc/server'
import { loadEnv } from './config/config'
import { KafkaProducer } from './kafka/kafka'
import {ClientPool} from "./telegram/clientPool";

(async function () {
  loadEnv()
  const kafkaProducer = await KafkaProducer.init()
  const telegramClientPool = new ClientPool(kafkaProducer)

  startServer(telegramClientPool)
})()
