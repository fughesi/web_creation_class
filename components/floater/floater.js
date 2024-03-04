export const floater = () => {
  const baseDiv = document.createElement("div");
  baseDiv.classList.add("floatbarContainer");
  baseDiv.innerHTML = `Follow us on social media! \n
<ul>
  <li><a href="http://www.facebook.com" target="_blank" noreferrer noreopener><img src="../../media/socials/facebookYellow.svg" alt="Facebook"></a></li>
  <li><a href="http://www.instagram.com" target=_blank noreferrer noreopener><img src="../../media/socials/instagramYellow.svg" alt="Instagram"></a></li>
  <li><a href="http://www.Twitter.com" target="_blank" noreferrer noreopener><img src="../../media/socials/twitterYellow.svg" alt="Twitter / X"></a></li>
</ul>
`;

  document.body.appendChild(baseDiv);
};

// docs
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
// https://developer.mozilla.org/docs/Web/API/Document/createTextNode
