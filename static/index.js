import * as Tests from "./tests.js";
import log from "./log.js";

log("info", `Loading tests...`);

let totalTests = 0;
Object.values(Tests).forEach((test) => {
  totalTests += test.amount;
});
log("info", `Loaded ${totalTests} tests`);
let testsPassed = 0;

let queue = [];
Object.values(Tests).forEach((test) => {
  queue.push(test);
});

function next (pass = 0) {
  testsPassed += pass;
  let test = queue[0];
  if (test) {
    queue.shift();
    //setTimeout(() => {
      test.init(next, add);
   // }, 200)
  } else {
    log("info", `${testsPassed} of ${totalTests} tests passed`);
  }
}

function add (pass = 0) {
  testsPassed += pass;
}

log("info", `Running tests...`);

next();