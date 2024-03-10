import { footer } from "../../components/footer/footer.js";
import { createObserver } from "../../utils/observer.js";
import { parallax } from "../../utils/parallax.js";
import { navbar } from "../../components/nav/nav.js";
import { primer } from "../../utils/primer.js";
import { toggle } from "../../utils/toggle.js";
import { cartModal } from "../../utils/cart.js";
import { getStorage } from "../../utils/storage.js";

primer();
toggle();
navbar("nav");
footer("footer");
cartModal("root", getStorage("shoppingCart"));
