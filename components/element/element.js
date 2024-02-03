class ReuseableComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // function that fires when custom element called
    this.elem = this.getAttribute("elem");
    this.text = this.getAttribute("text") || "";
    this.href = this.getAttribute("href") || "#";
    this.msg = this.getAttribute("msg") || "";
    this.render(this.elem);
  }

  render(elem) {
    switch (elem) {
      case "button":
        this.innerHTML = `
          <a href=${this.href}  class="reuseableButton" target="_blank" rel="noreferrer noopener">${this.text || ""}</a>
          `;
        break;

      case "cta":
        this.innerHTML = `
          <button onclick="alert('${this.msg}')"  class="callToAction">${this.text || ""}</button>
          `;
        break;

      default:
        console.log(
          "Must provide an 'elem' prop with one of the following elements: ['button', 'cta']",
        );
    }
  }
}

export const reuseableComponent = customElements.define(
  "custom-elem",
  ReuseableComponent,
);

// docs
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
// https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define#valid_custom_element_names
// https://developer.salesforce.com/docs/platform/lwc/guide/create-lifecycle-hooks-dom.html
// https://www.w3schools.com/js/js_switch.asp
