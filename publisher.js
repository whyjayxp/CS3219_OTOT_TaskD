var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.KafkaClient({ kafkaHost: "localhost:9091,localhost:9092,localhost:9093" }),
    producer = new Producer(client),
    payloads = [
        { topic: 'taskd-topic', messages: "Task D..." },
        { topic: 'taskd-topic', messages: "...Completed!" }
    ];
producer.on('ready', function () {
    producer.send(payloads, (err,data) => {
      if (err) {
        console.log("Error publishing message: ", err);
      } else {
        console.log("Message published!\n");
        console.log(data);
      }
      process.exit(0);
    });
});

producer.on('error', function (err) {
  console.log("Error: ", err);
})
