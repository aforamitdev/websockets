const http = require("http");
const webSocket = require("ws");

const server = http.createServer((req, res) => {
  res.end("i am conndexed ");
});

const wss = new webSocket.Server({
  server,
});

wss.on("headers", (headers, req) => {
  // one event header after page reload
  console.log(headers);
  // console.log(req);
});
wss.on("connection", (ws, req) => {
  // on event connection
  ws.send("Welcome to socketserver");
});
server.listen(8000);
