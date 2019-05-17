const functions = require('firebase-functions');

let value = 0;
exports.increment = functions.https.onCall(async (data, context) => {
  console.log(process.env.GCLOUD_PROJECT);
  return (++value);
});
