import { blogs } from "../../lib/blogs.js";
import { search } from "../../utils/search.js";

const elem = document.getElementById("blogSection");
window.addEventListener("load", (e) => search(e, elem, blogs));

document.getElementById("test").innerHTML = blogs[4].blog;
