
const AWS = require('aws-sdk');

// arn:aws:lambda:us-east-1:410269551220:function:ardienteWebsiteLambda
// POST /register Invoke URL: https://okgotrep75.execute-api.us-east-1.amazonaws.com/prod

exports.handler = (event, context, callback) => {

  // The body field of the event in a proxy integration is a raw string.
  // In order to extract meaningful values, we need to first parse this string
  // into an object. A more robust implementation might inspect the Content-Type
  // header first and use a different parsing strategy based on that value.
  const requestBody = JSON.parse(event.body);
  console.log('requestBody', requestBody);
  callback(null, {
    statusCode: 201,
    body: JSON.stringify({
      orderId: 0 /* , ...etc */
    }),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });
};
