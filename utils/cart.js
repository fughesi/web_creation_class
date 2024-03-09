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

const cartModal = (elem) => {
  const modalDiv = document.getElementById(elem.toString());
  const cart = getStorage("shoppingCart");
  let content = "";

  [cart, modalDiv].every(Boolean)
    ? cart.map((item) => {
        return (content += `
<p>The <strong>${item.name}</strong> by ${item.brand} (${item.quantity})</p>
<p>Price per ${item.type}:  \$${item.price.toFixed(2)} - subtotal: \$${(
          item.price * item.quantity
        ).toFixed(2)}</p>
<p>${item.sku}</p>
<span></span>
`);
      })
    : (content += `
<h1>There are currently no items in your cart</h1>
  `);

  modalDiv
    ? (modalDiv.innerHTML = `
<h1>Items currently in your cart:</h1>
${content}`)
    : console.log("Cart div not working");
};

cartModal("cartModalDiv");

// docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
