import { useState } from "react";
import { UseCounterProps } from "./UseCounter.types";

export const UseCounter = ({ initialCount = 0 }: UseCounterProps={}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return { count, increment, decrement };
};
