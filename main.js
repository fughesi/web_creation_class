import { navbar } from "./components/nav/nav.js";
import { reuseableComponent } from "./components/element/element.js";
import { signature } from "./lib/signature.js";
import { cards } from "./components/cards/cards.js";
import { footer } from "./components/footer/footer.js";
import { floater } from "./components/floater/floater.js";
import { sidebar } from "./components/sidebar/sidebar.js";

sidebar;
floater();
signature();
footer();
cards;
navbar("nav");
reuseableComponent;
