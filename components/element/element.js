import { getStorage, setStorage } from "../../utils/storage.js";

class ReuseableComponent extends HTMLElement {
  constructor() {
    super();
    this.classList.add("elementDefault");
  }

  connectedCallback() {
    // function that fires when custom element called
    this.toggle = setStorage("color-scheme", false);
    this.elem = this.getAttribute("elem");
    this.text = this.getAttribute("text") || "";
    this.href = this.getAttribute("href") || "#";
    this.msg = this.getAttribute("msg") || "";

    this.render(this.elem);
  }

  toggleSwitch() {
    this.toggle = !getStorage("color-scheme");
    this.toggle
      ? this.firstElementChild?.classList.add("true")
      : this.firstElementChild?.classList.remove("true");

    const DM = document.documentElement.style;
    if (this.toggle === true) {
      DM.setProperty("color-scheme", "dark");
      DM.setProperty("--color1", "#5f8670");
      DM.setProperty("--color2", "#ff9800");
      DM.setProperty("--color3", "#b80000");
      DM.setProperty("--color4", "#820300");
      DM.setProperty("--color5", "#ff5400");
      DM.setProperty("--accent1", "#eb5e28");
    } else {
      DM.setProperty("color-scheme", "light");
      DM.setProperty("--color1", "#fffcf2");
      DM.setProperty("--color2", "#ccc5b9");
      DM.setProperty("--color3", "#403d39");
      DM.setProperty("--color4", "#252422");
      DM.setProperty("--color5", "#ff5400");
      DM.setProperty("--accent1", "#eb5e28");
    }
    setStorage("color-scheme", this.toggle);
  }

  // toggleSwitch() {
  //   this.toggle = !this.toggle;
  //   this.toggle
  //     ? this.firstElementChild?.classList.add("true")
  //     : this.firstElementChild?.classList.remove("true");
  //
  //   const DM = document.documentElement.style;
  //   if (this.toggle === true) {
  //     DM.setProperty("color-scheme", "dark");
  //     DM.setProperty("--color1", "#5f8670");
  //     DM.setProperty("--color2", "#ff9800");
  //     DM.setProperty("--color3", "#b80000");
  //     DM.setProperty("--color4", "#820300");
  //     DM.setProperty("--color5", "#ff5400");
  //     DM.setProperty("--accent1", "#eb5e28");
  //   } else {
  //     DM.setProperty("color-scheme", "light");
  //     DM.setProperty("--color1", "#fffcf2");
  //     DM.setProperty("--color2", "#ccc5b9");
  //     DM.setProperty("--color3", "#403d39");
  //     DM.setProperty("--color4", "#252422");
  //     DM.setProperty("--color5", "#ff5400");
  //     DM.setProperty("--accent1", "#eb5e28");
  //   }
  //   return this.toggle;
  // }

  render(elem) {
    switch (elem) {
      case "button":
        this.innerHTML = `
          <a href=${
            this.href
          }  class="reuseableButton" target="_blank" rel="noreferrer noopener">${
          this.text || ""
        }</a>
          `;
        break;

      case "cta":
        this.innerHTML = `
          <button onclick="alert('${this.msg}')"  class="callToAction">${
          this.text || ""
        }</button>
          `;
        break;

      case "toggle":
        this.innerHTML = `
          <span class="toggleSwitch"><span></span></span>
          `;
        this.addEventListener("click", () => this.toggleSwitch());
        break;

      default:
        console.log(
          "Must provide an 'elem' prop with one of the following elements: ['button', 'cta', 'toggle']"
        );
    }
  }
}

export const reuseableComponent = customElements.define(
  "custom-elem",
  ReuseableComponent
);

// docs
// https://www.w3schools.com/js/js_switch.asp
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
// https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild
// https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
// https://developer.salesforce.com/docs/platform/lwc/guide/create-lifecycle-hooks-dom.html
// https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define#valid_custom_element_names
