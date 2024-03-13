import { footer } from "../../components/footer/footer.js";
import { navbar } from "../../components/nav/nav.js";
import { primer } from "../../utils/primer.js";
import { debounce } from "../../utils/debounce.js";
import { rating } from "../../components/rating/rating.js";

const form = document.querySelector(".contactForm");
const submit = document.getElementById("submitForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submit.addEventListener(
  "click",
  debounce(() => {
    alert("Thank you for signing up!");
  }, 1000)
);

primer();
rating("#rate");
navbar("nav");
footer("footer");
