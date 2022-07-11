import log from "../log.js";

export const webSocket = {
  amount: 0,
  async init (next) {  
    function WebSocket(url) {
      return new Promise(r => {
        const ws = new window.WebSocket(url);
    
        ws.onopen = function() {
          return r(ws);
        }
      })
    }
    
    let passed = 0;
    var ws = await (WebSocket('wss://'+location['host']+'/ws'));

    console.log(ws)

    next(passed);
    return 1;
  }
}
