import { footer } from "../../components/footer/footer.js";
import { navbar } from "../../components/nav/nav.js";
import { primer } from "../../utils/primer.js";
import { debounce } from "../../utils/debounce.js";

const form = document.querySelector(".contactForm");
const submit = document.getElementById("submitForm");
const input = document.getElementsByName("fname");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submit.addEventListener(
  "click",
  debounce(() => {
    alert("Thank you for signing up!");
  }, 1000)
);

console.log(input[0].nodeValue);

primer();
navbar("nav");
footer("footer");
