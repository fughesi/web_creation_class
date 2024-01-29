import { navbar } from "./components/nav/nav.js";
import { reuseableComponent } from "./components/element/element.js";
import { signature } from "./lib/signature.js";
import { cards } from "./components/cards/cards.js";
import { footer } from "./components/footer/footer.js";
import { floater } from "./components/floater/floater.js";

floater();
signature();
footer();
cards; // make inventory card on element div#cardCatalogue
navbar("nav"); // make navbar on element nav#nav
reuseableComponent;
