import { useCounter } from "../context/CreateCounterContext";

export const Cart = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <div>cartCount: {count}</div>
      <button onClick={increment}>add</button>
      <button onClick={decrement}>dec</button>
    </div>
  );
};
