const express = require('express');
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};
const app = express();
 app.get('/', (req, res) => {
  res.send('Hello, world!');
});
 https.createServer(options, app).listen(443);