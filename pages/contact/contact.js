import { footer } from "../../components/footer/footer.js";
import { createObserver } from "../../utils/observer.js";
import { parallax } from "../../utils/parallax.js";

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

// input.forEach((item) => {
//   item.addEventListener("change", () => console.log(item));
// });

footer("footer");
createObserver(".observe", 0, 0.0);
parallax(".parallax", 0.05);
