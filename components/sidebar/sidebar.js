import { links } from "../../lib/links.js";

const elem = document.getElementById("indexSidebar");

export const sidebar = (elem.innerHTML = links
  .map((i) => {
    return `
<p>${i.title}</p>
`;
  })
  .join(""));
