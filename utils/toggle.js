export const toggle = (elem, style) => {
  if (elem && style) {
    return document
      .getElementById(String(elem))
      .classList.toggle(String(style) || "");
  } else {
    console.log(
      "Must provide an element (elem) and class (css) parameter for toggle fn to work"
    );
  }
};

// docs
// https://www.w3schools.com/jsref/prop_element_classlist.asp
