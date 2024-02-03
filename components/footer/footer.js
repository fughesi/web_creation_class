import { links } from "../../lib/links.js";
import { SOCIALS } from "../../lib/enums.js";

export const footer = (elem) => {
  const footerElement = document.getElementById(elem);
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
