const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.static(__dirname + "/static"));

io.on("connection", function(client) {
  client.on("data", (data) => {
    client.emit("data", "Hello from server");
  });
});

server.listen(3000);
