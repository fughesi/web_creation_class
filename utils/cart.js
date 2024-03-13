import { setStorage, getStorage } from "./storage.js";
import { debounce } from "./debounce.js";
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
  cartModal();
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

export const cartModal = () => {
  const element = document.getElementById("cartModalDiv");
  const cartItems = getStorage("shoppingCart");
  const total = cartTotalAmount(cartItems);
  const quantity = cartTotalQuantity(cartItems);
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }); //.format("add value here");

  let content = `
  <i hidden>${JSON.stringify(cartItems)}</i> 
  <h1>THANK YOU FOR SHOPPING WITH <span class="store">OWL WALLETS &amp; MORE</span>!</h1>
  <h3>You currently have ${
    quantity
      ? quantity +
        " item(s) in your cart with a subtotal of " +
        currency.format(total) +
        " + tax."
      : "no items in your cart."
  } </h3>
  <hr>
  `;

  cartItems
    ? cartItems.map((item) => {
        return (content += `
<div class="cartModalContainer">
  <p>The <strong>${item.name}</strong> by ${item.brand}</p>
  <p>each ${currency.format(item.price)} / total: ${currency.format(
          item.price * item.quantity
        )}</p> 

<div>
  <button class="cartDecreaseBTN" data=${JSON.stringify(item)}>⬆︎</button>
 ( ${item.quantity} )
  <button class="cartAddBTN" data=${JSON.stringify(item)}>⬆︎</button>
</div>

</div>
`);
      })
    : (content += `
<h1>There are currently no items in your cart</h1>
  `);

  element
    ? ((element.innerHTML = content),
      element.querySelectorAll(".cartDecreaseBTN").forEach((btn) =>
        btn.addEventListener(
          "click",
          debounce((e) => {
            const item = JSON.parse(e.target.getAttribute("data"));
            cart(item, CART.DECREASE);
            cartModal();
          }, 200)
        )
      ),
      element.querySelectorAll(".cartAddBTN").forEach((btn) =>
        btn.addEventListener(
          "click",
          debounce((e) => {
            const item = JSON.parse(e.target.getAttribute("data"));
            cart(item, CART.ADD);
            cartModal();
          }, 200)
        )
      ))
    : "";
};

// docs
// https://www.w3schools.com/jsref/met_node_appendchild.asp
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
