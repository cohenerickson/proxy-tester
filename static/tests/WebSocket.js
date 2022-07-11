import log from "../log.js";

export const WebSocket = {
  amount: 0,
  run: async () => {  
    const socket = io();
  
    console.log(await socket.on("connect", () => {
      log("pass", "WebSocket connection established");
      socket.emit("data", "Hello from client");
    }));
  
    socket.on("data", () => {
      log("pass", "WebSocket data received");
    });

    setTimeout(() => {
      return 1
    }, 1000);
  }
}
