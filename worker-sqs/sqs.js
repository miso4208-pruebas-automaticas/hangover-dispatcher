var AWS = require('aws-sdk');

AWS.config.update({region:'us-east-1',
accessKeyId:process.env.ACCES_KEY_ID_SQS,
secretAccessKey:process.env.SECRET_ACCESS_KEY_SQS});
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

module.exports.sendQueue = function(payload, success, error) {
var sqsURL;
  switch (payload.subType) {
    case 'random':
        sqsURL='https://sqs.us-east-1.amazonaws.com/669213563582/worker-random-queue.fifo';
        break;
    case 'BDD':
        sqsURL='https://sqs.us-east-1.amazonaws.com/669213563582/worker-calabash-queue.fifo';
        break;
    case 'headless':
        sqsURL='https://sqs.us-east-1.amazonaws.com/669213563582/worker-cypress-queue.fifo';
        break;
    case 'MOCKARO':
          sqsURL='https://sqs.us-east-1.amazonaws.com/669213563582/worker-cypress-mockaro.fifo';
          break;
    case 'cucumber':
          sqsURL='https://sqs.us-east-1.amazonaws.com/669213563582/worker-cucumber-queue.fifo';
          break;
    default:
        console.log('NO EJECUCION');
}
var params = {
    MessageGroupId: payload.subType,
    MessageDeduplicationId: payload.code,
    MessageBody: JSON.stringify(payload),
    QueueUrl: sqsURL
  };

  sqs.sendMessage(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      error(err);
    } else {
      console.log("Success", data.MessageId);
      success(data.MessageId);
    }
  });
}
