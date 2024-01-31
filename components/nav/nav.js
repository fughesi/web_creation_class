export const navbar = (nav) => {
  const navElement = document.getElementById(nav);

  if (navElement) {
    navElement.innerHTML += `
    <ul class="desktopNavbar">
      <li><a href="../../pages/blogs/blogs.html">blogs</a></li>
      <li><a href="../../pages/questions/questions.html">questions</a></li>
      <li><a href="#">navlink</a></li>
      <li><a href="#">navlink</a></li>
      <li><a href="#">navlink</a></li>
    </ul>
`;
  }
};

// docs
// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
