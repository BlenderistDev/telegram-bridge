import {Telegram} from "./telegram";
import {Auth} from "./auth/auth";
import {KafkaProducer} from "../kafka/kafka";

export class ClientPool {
  private clients: Map<string, Telegram>
  private readonly kafka: KafkaProducer

  public constructor(kafka: KafkaProducer) {
    this.kafka = kafka
    this.clients = new Map<string, Telegram>()
  }

  public async getClient(id: string, session: string): Promise<Telegram> {
    if (this.clients.has(id)) {
      return new Promise(resolve => resolve(this.clients.get(id)))
    } else {
      let client = await Telegram.createTelegramClient(id, this.kafka, new Auth(), session)
      this.clients.set(id, client)
      return client
    }
  }
}

