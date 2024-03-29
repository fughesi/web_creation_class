import { reuseableComponent } from "./components/element/element.js";
import { inventoryCards } from "./components/cards/cards.js";
import { floater } from "./components/floater/floater.js";
import { footer } from "./components/footer/footer.js";
import { createObserver } from "./utils/observer.js";
import { visibility } from "./utils/visibility.js";
import { navbar } from "./components/nav/nav.js";
import { signature } from "./lib/signature.js";
import { parallax } from "./utils/parallax.js";
import { scale } from "./utils/scale.js";
import { mutation } from "./utils/mutation.js";

floater();
signature();
reuseableComponent;

navbar("nav");
footer("footer");

parallax(".tagline1", 0.1);
parallax(".tagline2", 0.2);
parallax(".tagline3", 0.3);

inventoryCards("watches", "watches");
inventoryCards("wallets", "wallets");

createObserver(".observe", "move", "0px 0px 0px 0px", 0.0);

visibility(".owl", 0.002);

scale(".owl", 0.0015);

mutation("cartIcon");
