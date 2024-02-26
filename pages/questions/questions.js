import { answers } from "../../lib/answers.js";
import { search } from "../../utils/search.js";
import { navbar } from "../../components/nav/nav.js";

navbar("FAQnav");
const element = document.getElementById("FAQ");
const searchBar = document.getElementById("searchBar");

window.addEventListener("load", (e) => search(e, element, answers));
searchBar.addEventListener("input", (e) => search(e, element, answers));

// docs
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
