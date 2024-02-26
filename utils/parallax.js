export const parallax = (elem, speed) => {
  const element = document.querySelectorAll(elem);

  element
    ? window.addEventListener("scroll", function () {
        element.forEach(
          (item) =>
            (item.style.transform = `translateY(${window.scrollY * speed}px)`)
        );
      })
    : console.log("need to provide element ID(#)/class(.) as first param");
};

// docs
// www.w3schools.com/jsref/prop_html_style.asp
// www.w3schools.com/Jsref/prop_win_scrollY.asp
