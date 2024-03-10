export const template = (html, elem) => {
  const element = document.getElementById(String(elem));
  const slate = document.createElement("template");
  const delta = document.createElement("template");

  slate.innerHTML = html.trim();

  if (delta !== slate) {
    delta.innerHTML = slate.innerHTML;
    element.appendChild(slate.content.cloneNode(true));
  }

  console.log(delta, slate);
};

// docs
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement/content
