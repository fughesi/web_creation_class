import { links } from "../../lib/links.js";

const footerElement = document.getElementById("footer");

export const footer = () => {
  links.map((link) => {
    footerElement.innerHTML += `
<div>
  <p>${link.title}</p>
  <ul>
    ${link.links.map((li) => `<li><a href=${li.trim()} >${li.trim()}</a></li>`).join("")}
  </ul>
</div>
`;
  });
};
