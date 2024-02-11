export const parallax = (elem, speed) => {
  const element = document.querySelector(elem);

  window.addEventListener("scroll", function () {
    element.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
};

// docs
// www.w3schools.com/jsref/prop_html_style.asp
// www.w3schools.com/Jsref/prop_win_scrollY.asp
