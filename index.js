const express = require("express");
const app = express();
const server = require("http").createServer(app);
const ws = require('express-ws')(app);

app.ws('/ws', (cli, req) => {
  //console.log(req.headers['origin'])
  
  cli.on('message', data => {
    
  })
})

app.ws('/echo', function(ws, req) {
  ws.on('message', function(msg) {
    ws.send(msg);
  });
});

app.use(express.static(__dirname + "/static"));

server.listen(3000);
