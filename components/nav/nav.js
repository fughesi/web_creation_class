export const navbar = (nav) => {
  const navElement = document.getElementById(nav);

  if (navElement) {
    navElement.innerHTML += `
    <ul class="desktopNavbar">
      <li><a href="#">stuff</a></li>
      <li><a href="#">things</a></li>
      <li><a href="#">junk</a></li>
      <li><a href="#">mooch</a></li>
      <li><a href="#">more</a></li>
    </ul>
`;
  }
};

// docs
// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
