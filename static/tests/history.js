import log from "../log.js";

export const History = {
  amount: 2,
  init (next) {
    let passed = 0;
    
    history.replaceState({}, "" , "/test");
    if (location.pathname.startsWith("/test")) {
      log("pass", `history.replaceState`);
      passed++;
    } else {
      log("fail", `history.replaceState`);
    }
    history.replaceState({}, "" , "/");

    history.pushState({}, "" , "/test");
    if (location.pathname.startsWith("/test")) {
      log("pass", `history.pushState`);
      passed++;
    } else {
      log("fail", `history.pushState`);
    }
    history.pushState({}, "" , "/");

    next(passed);
  }
}
