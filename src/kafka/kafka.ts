import { Kafka, Producer, RecordMetadata } from 'kafkajs'

export class KafkaProducer {
  private client: Producer

  public static init () {
    if (!process.env.KAFKA_CLIENT_ID) {
      throw Error("Undefined KAFKA_CLIENT_ID env")
    }
    if (!process.env.KAKFA_HOST) {
      throw Error("Undefined KAKFA_HOST env")
    }
    const kafkaProducer = new KafkaProducer()
    const client = new Kafka({
      clientId: process.env.KAFKA_CLIENT_ID,
      brokers: [process.env.KAKFA_HOST]
    })
    kafkaProducer.client = client.producer()
    return kafkaProducer.client.connect()
      .then(() => kafkaProducer)
  }

  public send (topic: string, message: string): Promise<RecordMetadata[]> {
    return this.client.send({
      topic: topic,
      messages: [
        { value: message }
      ]
    })
  }
}
