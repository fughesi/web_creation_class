import { cartModal } from "./cart.js";

export const mutation = (elem) => {
  const element = document.getElementById(String(elem));

  const mutated = new MutationObserver((mutations) => {
    mutations.forEach((item) => {
      console.log(mutations);
      cartModal(element);
    });
  });

  mutated.observe(element, {
    subtree: true,
    childList: true,
    characterData: true,
    attributeOldValue: true,
  });
};

// docs
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe
