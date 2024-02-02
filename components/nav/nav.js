export const navbar = (nav) => {
  const navElement = document.getElementById(nav);

  if (navElement) {
    navElement.innerHTML += `
    <div class="desktopNavbar">
      <a href="../../pages/blogs/blogs.html">blogs</a>
      <a href="../../pages/questions/questions.html">questions</a>
      <a href="#">navlink</a>
      <a href="#">navlink</a>
      <a href="#">navlink</a>
    </div>
`;
  }
};

// docs
// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
