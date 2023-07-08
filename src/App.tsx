import "./styles.css";
import Counter from "./components/Counter";
import { ContextProvider } from "./context/CreateCounterContext";
import { Cart } from "./components/Cart";
export default function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Counter>{(count: number) => <>count is {count}</>}</Counter>
        <Cart />
      </ContextProvider>
    </div>
  );
}
