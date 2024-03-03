import { footer } from "../../components/footer/footer.js";
import { createObserver } from "../../utils/observer.js";
import { parallax } from "../../utils/parallax.js";
import { navbar } from "../../components/nav/nav.js";
import { primer } from "../../utils/primer.js";

const form = document.querySelector(".contactForm");
const submit = document.getElementById("submitForm");
const input = document.getElementsByName("fname");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submit.addEventListener("click", () => {
  setTimeout(() => {
    alert("Thank you for signing up!");
  }, 1000);
});

console.log(input[0].nodeValue);

primer();
navbar("nav");
footer("footer");
parallax(".parallax", 0.05);
createObserver(".observe", 0, 0.0);
