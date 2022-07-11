import * as Tests from "./tests.js";
import log from "./log.js";

log("info", `Loading tests...`);

let totalTests = 0;
Object.values(Tests).forEach((test) => {
  totalTests += test.amount;
});
log("info", `Loaded ${totalTests} tests`);
let testsPassed = 0;

log("info", `Running tests...`);
Object.values(Tests).forEach(async (test) => {
  testsPassed += await test.run();
});

log("info", `${testsPassed} of ${totalTests} tests passed`);
