import { blogs } from "../../lib/blogs.js";
import { search } from "../../utils/search.js";
import { navbar } from "../../components/nav/nav.js";
import { footer } from "../../components/footer/footer.js";

window.addEventListener("load", (e) =>
  search(e, "blogSection", blogs, "title", "content", "blog")
);

navbar("nav");
footer("footer");
