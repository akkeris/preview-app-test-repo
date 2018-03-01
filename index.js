"use strict"

const http = require('http');
process.env.RETURN_VALUE = process.env.RETURN_VALUE || "setting return value failed."
const server = http.createServer((req, res) => {
  res.writeHead(200, {});
  if(req.url.indexOf('environment') > -1) {
    res.write(JSON.stringify(process.env));
  } else {
    res.write(process.env.RETURN_VALUE);
  }
  res.end();
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(9000);