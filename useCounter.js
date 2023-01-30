import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const add = () => {
    setCounter(counter + 1);
  };

  const subtract = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    add,
    subtract,
    reset,
  };
};
