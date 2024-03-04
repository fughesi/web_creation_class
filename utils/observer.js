export function createObserver(elem, style, margin, stops) {
  let options = {
    root: null, // defines ancestor; never really used.
    rootMargin: margin ? `${margin.toString()}` : "0px 0px 0px 0px", // grows or shrinks the viewport
    threshold: stops ? stops : 0.0, // percentage of element visible before effect (0.0 => 1.0, can be an array of stops)
  };

  const element = document.querySelectorAll(elem);

  const observer = new IntersectionObserver((entries) => {
    entries?.forEach((entry) => {
      entry?.isIntersecting
        ? entry?.target.classList.add(String(style))
        : entry?.target.classList.remove(String(style));
    });
  }, options);

  element?.length > 0
    ? element.forEach((elem) => observer.observe(elem))
    : console.log("need to provide element ID(#)/class(.) as first param");
}

// docs
// https://www.w3schools.com/howto/howto_js_toggle_class.asp
// https://blog.webdevsimplified.com/2022-01/intersection-observer/
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// https://www.javascripttutorial.net/dom/css/remove-class-from-an-element/
