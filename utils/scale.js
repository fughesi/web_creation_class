export const scale = (elem, speed) => {
  const element = document.querySelectorAll(elem);
  const height = document.documentElement.clientHeight;

  element.length > 0
    ? element.forEach((item) => {
        window.addEventListener("scroll", () => {
          const bounds = item.getBoundingClientRect();

          if (bounds.top < height && bounds.bottom > 0) {
            item.style.scale = window.scrollY * speed;
          } else {
            window.removeEventListener("scroll", () => {
              element.forEach((item) => item.style.removeProperty("scale"));
            });
          }
        });
      })
    : console.log("need to provide element ID(#)/class(.) as first param");
};

// docs
// www.w3schools.com/jsref/prop_html_style.asp
// www.w3schools.com/Jsref/prop_win_scrollY.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
