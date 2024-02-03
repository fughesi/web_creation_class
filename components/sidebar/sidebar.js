import { links } from "../../lib/links.js";

export const sidebar = (elem) => {
  const sidebarElem = document.getElementById(elem);
  sidebarElem.innerHTML = links
    ?.map((i) => {
      return `
<p>${i.title}</p>
`;
    })
    .join("");
};
