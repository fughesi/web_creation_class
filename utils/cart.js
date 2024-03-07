import { setStorage, getStorage } from "./storage.js";
import { CART } from "../lib/enums.js";

export const cart = (product, action) => {
  let shoppingCart = getStorage("shoppingCart") || [];

  // find index of product, otherwise add it
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
      } else {
        return;
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

export const cartTotalAmount = (shoppingCart) => {
  const totalAmount = shoppingCart?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return totalAmount;
};

export const cartTotalQuantity = (shoppingCart) => {
  const totalQuantity = shoppingCart?.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return totalQuantity;
};

// docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
