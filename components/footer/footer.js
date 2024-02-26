import { links } from "../../lib/links.js";
import { SOCIALS } from "../../lib/enums.js";

export const footer = (elem) => {
  const footerElement = document.getElementById(elem);

  links.map((link) => {
    footerElement.innerHTML += `
<div>
  <p>${link.title}</p>
  <ul>
    ${link.links
      .map((li) => `<li><a href=${li.trim()} >${li.trim()}</a></li>`)
      .join("")}
  </ul>
</div>
`;
  });

  footerElement.innerHTML += `
<div class="footerSocials">
  <fieldset>
    <legend>FOLLOW US!</legend>
    <ul>
      <li><a href="www.facebook.com" noreferrer noreopener> ${SOCIALS.FACEBOOK}</a> </li>
      <li><a href="www.instagram.com" noreferrer noreopener> ${SOCIALS.INSTAGRAM}</a> </li>
      <li><a href="www.Twitter.com" noreferrer noreopener> ${SOCIALS.X}</a> </li>
      <li><a href="www.youtube.com" noreferrer noreopener> ${SOCIALS.YOUTUBE}</a> </li>
    </ul>
  </fieldset>
</div>
`;
};
