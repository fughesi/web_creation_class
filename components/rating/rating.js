export const rating = (rate) => {
  const customerRating = document.querySelectorAll(String(rate));

  const starContainer = document.createElement("div");
  starContainer.classList.add("stars");

  customerRating?.forEach((item) => {
    item.before(starContainer);
    item.addEventListener("change", (e) => {
      starContainer.style.setProperty("--customer-rating", e.target.value);
    });
  });
};

// docs
// https://developer.mozilla.org/en-US/docs/Web/API/Element/before
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
// https://www.youtube.com/watch?v=oiai47goI6A
