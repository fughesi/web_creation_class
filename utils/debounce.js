export const debounce = (func, fuse) => {
  let delay;

  return function (...args) {
    if (delay) {
      clearTimeout(delay);
    }

    delay = setTimeout(() => {
      func(...args);
    }, fuse);
  };
};

// docs
// https://www.w3schools.com/jsref/met_win_settimeout.asp
// https://www.w3schools.com/jsref/met_win_cleartimeout.asp
