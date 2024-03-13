import { cart, cartModal } from "../../utils/cart.js";
import { inventory } from "../../lib/inventory.js";
import { debounce } from "../../utils/debounce.js";
import { CART } from "../../lib/enums.js";

export const inventoryCards = (elem, key) => {
  const catalogue = document.getElementById(String(elem));
  let content = "";

  catalogue?.setAttribute("name", String(key) || "");

  inventory
    ?.filter((prod) => prod.type === String(key))
    ?.map((item) => {
      content += `
<div class="cardItem ${item.name || ""}" id=${item.id} >
  <div class="itemCardPrice">
    <p class=${item.price ? "itemPrice" : "none"}>$${item.price || ""}</p>
    <button class="cartDecreaseBTN" data=${JSON.stringify(item)}>⬆︎</button>
    <button class="cartAddBTN" data=${JSON.stringify(item)}>⬆︎</button>
  </div>
  <img src=${item.urls[0]} || "media/404.jpg"})" alt="${
        item.alts[0] || ""
      }"></img>
  <p class=${item.sale ? "saleItem" : "none"}>ON SALE!</p>

  <div class="itemCardName">
    <p class=${item.name ? "itemName" : "none"}>
      <span class="highlight">
        The ${item.name || ""}
      </span>
    </p>
    <p class=${item.material ? "itemMaterial" : "none"}>
      <span class="highlight">
       ${item.material || ""} ${item.style || ""} ${item.type || ""} ${
        item.brand ? "by " + item.brand : ""
      }
      </span>
    </p>
  </div>
</div>
`;
    });

  return catalogue
    ? ((catalogue.innerHTML = content),
      catalogue.querySelectorAll(".cartDecreaseBTN").forEach((btn) =>
        btn.addEventListener(
          "click",
          debounce((e) => {
            const item = JSON.parse(e.target.getAttribute("data"));
            cart(item, CART.DECREASE);
            cartModal();
            alert("Item decremented from cart");
          }, 200)
        )
      ),
      catalogue.querySelectorAll(".cartAddBTN").forEach((btn) =>
        btn.addEventListener(
          "click",
          debounce((e) => {
            const item = JSON.parse(e.target.getAttribute("data"));
            cart(item, CART.ADD);
            cartModal();
            alert("Item added to cart");
          }, 200)
        )
      ))
    : console.log("cards didn't work - need elem property");
};

// docs
// https://www.w3schools.com/jsref/jsref_map.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

// import { inventory } from "../../lib/inventory.js";
// import { cart } from "../../utils/cart.js";
// import { CART } from "../../lib/enums.js";
//
// export const inventoryCards = (elem, key) => {
//   const catalogue = document.getElementById(String(elem));
//   let content = "";
//
//   catalogue?.setAttribute("name", String(key) || "");
//
//   inventory
//     ?.filter((prod) => prod.type === String(key))
//     ?.map((item) => {
//       content += `
// <div class="cardItem ${item.name || ""}" id=${item.id} >
//   <img src=${item.urls[0]} || "media/404.jpg"})" alt="${
//         item.alts[0] || ""
//       }"></img>
//   <p class=${item.sale ? "saleItem" : "none"}>ON SALE!</p>
//   <p class=${item.price ? "itemPrice" : "none"}>$${item.price || ""}</p>
//
//   <div class="itemCardName">
//     <p class=${item.name ? "itemName" : "none"}>
//       <span class="highlight">
//         The ${item.name || ""}
//       </span>
//     </p>
//     <p class=${item.material ? "itemMaterial" : "none"}>
//       <span class="highlight">
//        ${item.material || ""} ${item.style || ""} ${item.type || ""} ${
//         item.brand ? "by " + item.brand : ""
//       }
//       </span>
//     </p>
//   </div>
// </div>
// `;
//     });
//
//   return catalogue
//     ? (catalogue.innerHTML = content)
//     : console.log("cards didn't work - need elem property");
// };
//
// // docs
// // https://www.w3schools.com/jsref/jsref_map.asp
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
// // https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
