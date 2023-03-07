import { counterTwoProps } from "./counterTwoProps.types";

export const CounterTwo = (props: counterTwoProps) => {
  return (
    <>
      <div>Counter two</div>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </>
  );
};
