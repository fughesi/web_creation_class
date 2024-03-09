import { inventory } from "../../lib/inventory.js";
import { cart } from "../../utils/cart.js";
import { CART } from "../../lib/enums.js";

export const inventoryCards = (elem, key) => {
  const catalogue = document.getElementById(String(elem));
  let domText = "";

  catalogue.setAttribute("name", String(key) || "");

  inventory
    ?.filter((prod) => prod.type === String(key))
    ?.map((item) => {
      domText += `
<div class="cardItem ${item.name || ""}" id=${item.id} >
  <img src=${item.urls[0]} || "media/404.jpg"})" alt="${
        item.alts[0] || ""
      }"></img>
  <p class=${item.sale ? "saleItem" : "none"}>ON SALE!</p>
  <p class=${item.price ? "itemPrice" : "none"}>$${item.price || ""}</p>

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

  return (catalogue.innerHTML = domText);
};

// docs
// https://www.w3schools.com/jsref/jsref_map.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
