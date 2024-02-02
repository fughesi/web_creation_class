const toggle = (elem, css) => {
  if (elem && css) {
    return document
      .getElementById(elem.toString())
      .classList.toggle(css.toString() || "");
  } else {
    console.log(
      "Must provide an element (elem) and class (css) parameter for toggle fn to work",
    );
  }
};

// docs
// https://www.w3schools.com/jsref/prop_element_classlist.asp
