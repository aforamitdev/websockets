const http = require("http");
const sockeio = require("socket.io");
// server
const server = http.createServer((req, res) => {
  res.end("I am conneced!!!");
});

// socket init
const io = sockeio(server);
// console.log(io); //console log statment

io.on("connection", (socket) => {
  console.log("onconnection log", new Date());
  //whent any thing connects to the scoket io
  socket.emit("welcome", "welcome to the websocket server!!!!");
  socket.on("message", (data) => {
    console.log(data);
  });
});

server.listen(8000);
