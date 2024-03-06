export const setStorage = (key, value) => {
  localStorage.setItem(String(key), JSON.stringify(value));
};

export const getStorage = (key) => {
  return JSON.parse(localStorage.getItem(String(key)));
};

export const removeStorage = (key) => {
  localStorage.removeItem(String(key));
};

// docs
// https://www.w3schools.com/jsref/prop_win_localstorage.asp
// https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/
// https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem
