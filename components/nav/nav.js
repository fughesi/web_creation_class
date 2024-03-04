import { createObserver } from "../../utils/observer.js";
import { reuseableComponent } from "../element/element.js";

export const navbar = (nav) => {
  const navElement = document.getElementById(String(nav));
  reuseableComponent;

  navElement
    ? (navElement.innerHTML += `
    <div class="desktopNavbar">
      <a href="../../pages/blogs/blogs.html">blogs</a>
      <a href="../../pages/questions/questions.html">questions</a>
      <a href="../../pages/contact/contact.html">contact</a>
      <a href="../../index.html"><img src="../../media/icons/owl-small.png" alt="Home page"></a>
      <a href="../../pages/products/products.html">products</a>
      <a href="#">navlink</a>
      <custom-elem elem="toggle"></custom-elem>
    </div>
    <div class="navObserver crunch"></div>
`)
    : "";

  createObserver(".navObserver", "crunch", "5px 0px 0px 0px", 0.0);
};

// docs
// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
