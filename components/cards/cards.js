import { inventory } from "../../lib/inventory.js";

const catalogue = document.getElementById("cardCatalogue");

export const cards = inventory.watches.map((item) => {
  return (catalogue.innerHTML += `
<div class="cardItem" id=${item.sku} >
  <img src=${item.urls[0]} || "media/404.jpg"})" alt="${item.alts[0] || ""}"></img>
  <p class=${item.sale ? "saleItem" : "none"}>SAVE %</p>
  <p class=${item.price ? "itemPrice" : "none"}>$${item.price || ""}</p>

  <div class="itemCardName">
    <p class=${item.name ? "itemName" : "none"}>
    <span class="highlight">
    ${item.name || ""}
    </span>
    </p>
    <p class=${item.material ? "itemMaterial" : "none"}>${item.pattern || ""} ${item.material || ""} ${item.style || ""} ${item.type || ""} ${item.brand ? "by " + item.brand : ""}</p>
  </div>
</div>
`);
});

// docs
// https://www.w3schools.com/jsref/jsref_map.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
