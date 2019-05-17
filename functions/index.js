const functions = require('firebase-functions');

let value = 0;
exports.increment = functions.https.onCall(async (data, context) => {
  return (++value);
});
