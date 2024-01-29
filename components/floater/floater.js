export const floater = () => {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("Hi there and greetings!");

  newDiv.classList.add("floatbarContainer");
  newDiv.appendChild(newContent);
  newDiv.onclick = (e) => {
    alert(e);
  };

  document.body.appendChild(newDiv);
};

// docs
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
