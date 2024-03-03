import { navbar } from "./components/nav/nav.js";
import { reuseableComponent } from "./components/element/element.js";
import { signature } from "./lib/signature.js";
import { inventoryCards } from "./components/cards/cards.js";
import { footer } from "./components/footer/footer.js";
import { floater } from "./components/floater/floater.js";
import { sidebar } from "./components/sidebar/sidebar.js";
import { createObserver } from "./utils/observer.js";
import { parallax } from "./utils/parallax.js";
import { rating } from "./components/rating/rating.js";

floater();
signature();
reuseableComponent;

navbar("nav");
rating(".rate");
footer("footer");
sidebar("indexSidebar");

parallax(".parallax", 0.1);
inventoryCards("watches", "watches");
inventoryCards("wallets", "wallets");
createObserver(".observe", "move", "0px 0px 0px 0px", 0.0);
