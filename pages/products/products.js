import { footer } from "../../components/footer/footer.js";
import { navbar } from "../../components/nav/nav.js";
import { inventory } from "../../lib/inventory.js";
import { search } from "../../utils/search.js";

// navbar("nav");
footer("footer");

const searchBar = document.getElementById("searchBar");
console.log(inventory);

window.addEventListener("load", (e) =>
  search(e, "productChart", inventory, "price", "name", "brand", "tagline")
);

searchBar.addEventListener("input", (e) =>
  search(e, "productChart", inventory, "price", "name", "brand", "tagline")
);
