var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient({ kafkaHost: "localhost:9091,localhost:9092,localhost:9093" }),
    consumer = new Consumer(client, [{ topic: 'taskd-topic' }], { groupId: 'taskd-group' });

consumer.on('message', function (message) {
  console.log("Message received!\n");
  console.log(message);
});

consumer.on('error', function (err) {
  console.log("Error: ", err);
})
