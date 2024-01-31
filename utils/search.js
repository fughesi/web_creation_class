export function search(e, elem, iter) {
  const value = e.target.value?.toString()?.toLowerCase().trim();
  return value?.length > 0
    ? (elem.innerHTML = iter
        ?.filter(
          (i) =>
            i.question.toLowerCase().includes(value) ||
            i.answer.toLowerCase().includes(value),
        )
        .map((i) => {
          return `
            <div>
              <p>${i.question}</p>
              <p>${i.answer}</p>
            </div>
            `;
        })
        .join(""))
    : (elem.innerHTML = iter
        ?.map((i) => {
          return `
            <div>
              <p>${i.question || i.title}</p>
              <p>${i.answer || i.content}</p>
            </div>
            `;
        })
        .join(""));
}

// docs
// https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/data
// https://developer.mozilla.org/en-US/docs/Web/API/Event
// https://www.delftstack.com/howto/javascript/javascript-filter-string/
