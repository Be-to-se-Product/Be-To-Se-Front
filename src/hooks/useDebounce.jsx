import React from "react";

const useDebounce = (fn, delay) => {
  const timer = React.useRef(null);

  const debounceFn = (...args) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  };

  return debounceFn;
};

export default useDebounce;
