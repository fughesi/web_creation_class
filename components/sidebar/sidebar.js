import { links } from "../../lib/links.js";

export const sidebar = (elem) => {
  const sidebarElem = document.getElementById(String(elem));

  sidebarElem
    ? (sidebarElem.innerHTML = links
        ?.map((i) => {
          return `
<p>${i.title}</p>
`;
        })
        .join(""))
    : console.log("Need to pass in a 'elem' parameter");
};
