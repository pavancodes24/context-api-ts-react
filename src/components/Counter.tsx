import { ReactNode, useReducer } from "react";
import { useCounter } from "../context/CreateCounterContext";

type CounterType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: CounterType) => {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <div>{children(count)}</div>
      <button onClick={increment}>countIncrement</button>
      <button onClick={decrement}>countDecrement</button>
    </div>
  );
};

export default Counter;
