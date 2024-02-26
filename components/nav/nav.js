export const navbar = (nav) => {
  const navElement = document.getElementById(String(nav));

  navElement
    ? (navElement.innerHTML += `
    <div class="desktopNavbar observe">
      <a href="../../pages/blogs/blogs.html">blogs</a>
      <a href="../../pages/questions/questions.html">questions</a>
      <a href="../../pages/contact/contact.html">contact</a>
      <a href="#">navlink</a>
      <a href="#">navlink</a>
    </div>
`)
    : "";
};

function shrinkNav() {
  document.body.scrollTop > 80
    ? (navElement.style.padding = "30px 10px")
    : (navElement.style.padding = "150px 40px");
}

// docs
// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
