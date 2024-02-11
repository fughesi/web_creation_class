import { navbar } from "./components/nav/nav.js";
import { reuseableComponent } from "./components/element/element.js";
import { signature } from "./lib/signature.js";
import { inventoryCards } from "./components/cards/cards.js";
import { footer } from "./components/footer/footer.js";
import { floater } from "./components/floater/floater.js";
import { sidebar } from "./components/sidebar/sidebar.js";
import { createObserver } from "./utils/observer.js";
import { parallax } from "./utils/parallax.js";

floater();
signature();
reuseableComponent;

navbar("nav");
footer("footer");
sidebar("indexSidebar");

parallax(".parallax", 0.05);
inventoryCards(1, "watches");
inventoryCards(0, "wallets");
createObserver(".observe", 0, 0.0);
