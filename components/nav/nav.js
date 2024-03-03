import { createObserver } from "../../utils/observer.js";

export const navbar = (nav) => {
  const navElement = document.getElementById(String(nav));

  navElement
    ? (navElement.innerHTML += `
    <div class="desktopNavbar">
      <a href="../../index.html">home</a>
      <a href="../../pages/blogs/blogs.html">blogs</a>
      <a href="../../pages/questions/questions.html">questions</a>
      <a href="../../pages/contact/contact.html">contact</a>
      <a href="../../pages/products/products.html">products</a>
      <a href="#">navlink</a>
    </div>
    <div class="navObserver crunch"></div>
`)
    : "";

  createObserver(".navObserver", "crunch", "10px 0px 0px 0px", 0.0);
};

// docs
// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
