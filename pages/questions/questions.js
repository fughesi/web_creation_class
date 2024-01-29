import { answers } from "../../lib/answers.js";

const elem = document.getElementById("FAQ");

const FAQ = answers
  .map((i, index) => {
    return `
<div>
  <p class=${index}>${i.question}</p>
  <p>${i.answer}</p>
</div>
`;
  })
  .join("");

elem.innerHTML = FAQ;
