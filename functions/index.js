const functions = require("firebase-functions");

// HTTPリクエストを処理する例
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello, World!");
});