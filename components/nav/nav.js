import { createObserver } from "../../utils/observer.js";
import { reuseableComponent } from "../element/element.js";

export const navbar = (nav) => {
  const navElement = document.getElementById(String(nav));
  reuseableComponent;

  navElement
    ? (navElement.innerHTML += `
<div class="desktopNavbar">
  <span></span>
  <custom-elem elem="toggle" text="dark&nbsp;mode"></custom-elem>
  <div class="links">
    <a href="../../index.html">&lt; HOME &gt;</a>
    <a href="../../pages/blogs/blogs.html">blogs</a>
    <a href="../../pages/questions/questions.html">questions</a>
    <a href="../../pages/contact/contact.html">contact</a>
    <a href="../../pages/products/products.html">products</a>
  </div>
</div>
<div class="navObserver crunch"></div>
`)
    : "";

  createObserver(".navObserver", "crunch", "5px 0px 0px 0px", 0.0);
};

// <a href="../../index.html"><img src="../../media/icons/owl-small.png" alt="Home page" /></a>
// <custom-elem elem="modal" img="../../media/favicon.webp" alt="shopping cart" className="cartIcon" ></custom-elem>

// docs
// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
