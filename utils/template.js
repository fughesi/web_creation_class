export const template = (html, elem) => {
  const element = document.getElementById(String(elem));
  const slate = document.createElement("template");

  slate.innerHTML = html;

  element.appendChild(slate.content.cloneNode(true));

  console.log(slate);
};

// docs
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement/content
