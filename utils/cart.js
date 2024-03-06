import { setStorage, getStorage, removeStorage } from "./storage.js";
import { CART } from "../lib/enums.js";

export const cart = (product, action) => {
  let shoppingCart = getStorage("shoppingCart") || [];

  // find index of product in cart if it exists, otherwise add it
  const item = shoppingCart?.findIndex((i) => i.id === product?.id);

  switch (String(action)) {
    case CART.ADD:
      if (item >= 0) {
        shoppingCart[item].quantity += 1;
      } else {
        shoppingCart.push({ ...product, quantity: 1 });
      }
      break;

    case CART.REMOVE:
      if (item >= 0) {
        shoppingCart = shoppingCart.filter((i) => i?.id !== product?.id);
      }
      break;

    case CART.DECREASE:
      if (item >= 0) {
        shoppingCart[item].quantity <= 1
          ? (shoppingCart = shoppingCart.filter((i) => i?.id !== product?.id))
          : (shoppingCart[item].quantity -= 1);
      } else {
        return;
      }
      break;

    default:
      return;
  }

  setStorage("shoppingCart", shoppingCart);
};

// export const cartTotal = (shoppingCart) => {
//   let Total = 0;
//   for (const item of shoppingCart) {
//     item.price ? (Total += item.price) : 0;
//   }
// };

// docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
