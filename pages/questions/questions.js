import { answers } from "../../lib/answers.js";
import { search } from "../../utils/search.js";
import { navbar } from "../../components/nav/nav.js";
import { footer } from "../../components/footer/footer.js";
import { primer } from "../../utils/primer.js";

primer();
footer("footer");
navbar("nav");

const searchBar = document.getElementById("searchBar");

window.addEventListener("load", (e) =>
  search(e, "FAQ", answers, "question", "answer")
);
searchBar.addEventListener("input", (e) =>
  search(e, "FAQ", answers, "question", "answer")
);

// docs
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
