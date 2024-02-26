import { inventory } from "../../lib/inventory.js";

const cards = (idx, elem) => {
  const catalogue = document.getElementById(elem);

  catalogue?.setAttribute("name", inventory[idx][idx]?.type || "");

  inventory[idx]?.map((item) => {
    return catalogue
      ? (catalogue.innerHTML += `
<div class="cardItem ${item.name || ""}" id=${item.sku} >
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
`)
      : "Segfault on cards.js!";
  });
};

export const inventoryCards = (idx, elem) => {
  cards(idx, elem);
};

// docs
// https://www.w3schools.com/jsref/jsref_map.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
