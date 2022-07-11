import log from "../log.js";

const expect = {
  "href": "https://proxy-tester.cohenerickson.repl.co/",
  "origin": "https://proxy-tester.cohenerickson.repl.co",
  "protocol": "https:",
  "host": "proxy-tester.cohenerickson.repl.co",
  "hostname": "proxy-tester.cohenerickson.repl.co",
  "port": "",
  "pathname": "/",
  "search": "",
  "hash": ""
}

export const Location = {
  amount: 20,
  init (next) {
    let passed = 0;
    
    // location
    Object.keys(expect).forEach((key) => {
      if (location[key] ===  expect[key]) {
        log("pass", `location.${key}`);
        passed++;
      } else {
        log("fail", `location.${key}`);
      }
    });

    // window.location
    Object.keys(expect).forEach((key) => {
      if (window.location[key] ===  expect[key]) {
        log("pass", `window.location.${key}`);
        passed++;
      } else {
        log("fail", `window.location.${key}`);
      }
    });

    // location class
    if (window.location instanceof window.Location) {
      log("pass", "location instanceof Location");
      passed++;
    } else {
      log("fail", "location instanceof Location");
    };

    // string values
    if ('window.location' !== 'wi'+'nd'+'ow'+'.'+'loc'+'ati'+'on') {
      log("fail", 'JavaScript location regex');
    } else {
      log("pass", 'JavaScript location regex');
      passed++;
    }

    //Reflect.get(self, atob('bG9jYXRpb24=')) bypasses regex and parsing use this
    
    next(passed);
  }
}
