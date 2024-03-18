import { getStorage, setStorage } from "../../utils/storage.js";
import { cartModal } from "../../utils/cart.js";
import { debounce } from "../../utils/debounce.js";

class ReuseableComponent extends HTMLElement {
  constructor() {
    super();
    this.classList.add("elementDefault");
  }

  // function that fires when custom element called
  connectedCallback() {
    this.toggle = setStorage("color-scheme", false);
    this.elem = this.getAttribute("elem");
    this.text = this.getAttribute("text") || "";
    this.href = this.getAttribute("href") || "#";
    this.msg = this.getAttribute("msg") || "";
    this.img = this.getAttribute("img") || "";
    this.alt = this.getAttribute("alt") || "";

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
      DM.setProperty("--color1", "#27374d");
      DM.setProperty("--color2", "#d8e9a8");
      DM.setProperty("--color3", "#4e9f3d");
      DM.setProperty("--color4", "#1e5128");
      DM.setProperty("--color5", "#191a19");
      DM.setProperty("--accent1", "#397bdb");
      DM.setProperty("--grey1", "#333333");
      DM.setProperty("--grey2", "#666666");
      DM.setProperty("--grey3", "#999999");
      DM.setProperty("--grey4", "#cccccc");
      DM.setProperty("--white", "#252422");
      DM.setProperty("--black", "#eeeeee");
    } else {
      DM.setProperty("color-scheme", "light");
      DM.setProperty("--color1", "#e1eded");
      DM.setProperty("--color2", "#cfeded");
      DM.setProperty("--color3", "#071952");
      DM.setProperty("--color4", "#2a9c9d");
      DM.setProperty("--color5", "#2d03ff");
      DM.setProperty("--accent1", "cornflowerblue");
      DM.setProperty("--grey1", "#cccccc");
      DM.setProperty("--grey2", "#333333");
      DM.setProperty("--grey3", "#666666");
      DM.setProperty("--grey4", "#999999");
      DM.setProperty("--black", "#252422");
      DM.setProperty("--white", "#eeeeee");
    }
    setStorage("color-scheme", this.toggle);
  }

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

      case "modal":
        this.innerHTML = `
          <img src="${this.img}" alt="${
          this.alt
        }"  id="cartIcon" count="${5}" />
          <div id="cartModalDiv"></div>
          `;
        this.querySelector("#cartIcon")?.addEventListener(
          "click",
          debounce((e) => {
            cartModal(), e.target.classList.toggle("cartModal");
          }, 100)
        );
        break;

      case "toggle":
        this.innerHTML = `
          <span class="toggleSwitch" mode="${this.text}"><span></span></span>
          `;
        this.addEventListener("click", (e) => this.toggleSwitch(e));
        break;

      default:
        console.log(
          "Must provide an 'elem' prop with one of the following elements: ['button','modal', 'cta', 'toggle']"
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
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
// https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
// https://developer.salesforce.com/docs/platform/lwc/guide/create-lifecycle-hooks-dom.html
// https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define#valid_custom_element_names
