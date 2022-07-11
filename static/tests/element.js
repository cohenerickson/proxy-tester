import log from "../log.js";

export const Element = {
  amount: 1,
  init (next) {
    let passed = 0;
    
    let img = document.createElement("img");

    img.onload = () => {
      log("pass", "Images");
      passed++;
      next(passed);
    }

    img.onerror = () => {
      log("fail", "Images");
      next(passed);
    }

    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEatcjboj6XRMTpnC0S67eygenjv5G8mMsQ&usqp=CAU";

  }
}
