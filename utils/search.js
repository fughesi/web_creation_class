export function search(e, elem, iter, key1, key2, key3, key4, key5) {
  const string = e.target.value?.toString().toLowerCase();
  const node = document.getElementById(String(elem));
  let domElem = "";

  [key1, key2].every(Boolean) ||
    console.log(
      "Must include at least 2 arguments for iter in the 4th and 5th positions"
    );

  string?.trim().length > 0
    ? (domElem = iter
        ?.filter(
          (i) =>
            String(i[key1])?.toLowerCase().includes(string) ||
            String(i[key2])?.toLowerCase().includes(string) ||
            String(i[key3])?.toLowerCase().includes(string) ||
            String(i[key4])?.toLowerCase().includes(string) ||
            String(i[key5])?.toLowerCase().includes(string)
        )
        .map((i) => {
          return `
               <div>
                ${i[key1] == undefined ? "" : `<p>${i[key1]}</p>`}
                ${i[key2] == undefined ? "" : `<p>${i[key2]}</p>`}
                ${i[key3] == undefined ? "" : `<p>${i[key3]}</p>`}
                ${i[key4] == undefined ? "" : `<p>${i[key4]}</p>`}
                ${i[key5] == undefined ? "" : `<p>${i[key5]}</p>`}
               </div>
               `;
        })
        .join(""))
    : (domElem = iter
        ?.map((i) => {
          return `
               <div>
                ${i[key1] == undefined ? "" : `<p>${i[key1]}</p>`}
                ${i[key2] == undefined ? "" : `<p>${i[key2]}</p>`}
                ${i[key3] == undefined ? "" : `<p>${i[key3]}</p>`}
                ${i[key4] == undefined ? "" : `<p>${i[key4]}</p>`}
                ${i[key5] == undefined ? "" : `<p>${i[key5]}</p>`}
               </div>
               `;
        })
        .join(""));

  return (node.innerHTML = domElem);
}

// docs
// https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/data
// https://developer.mozilla.org/en-US/docs/Web/API/Event
// https://www.delftstack.com/howto/javascript/javascript-filter-string/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
