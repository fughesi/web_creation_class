import { blogs } from "../../lib/blogs.js";
import { search } from "../../utils/search.js";
import { navbar } from "../../components/nav/nav.js";
import { footer } from "../../components/footer/footer.js";

navbar("nav");
footer("footer");

const searchBar = document.getElementById("searchBar");
window.addEventListener("load", (e) =>
  search(e, "blogSection", blogs, "title", "content", "blog")
);
searchBar.addEventListener("input", (e) =>
  search(e, "blogSection", blogs, "title", "content", "blog")
);
