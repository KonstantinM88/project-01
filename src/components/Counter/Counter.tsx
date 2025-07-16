

import { useCounter } from "../../hooks/useCounter";
import style from "./Counter.module.css";

export const Counter = () => {
  // const initialValue = 0;
  // const [counter, setCounter] = useState<number>(initialValue);
  const { counter, increment, decrement, reset } = useCounter();
  // tuple - кортеж
  // state, local state - состояние
  // setter function - функция сеттер
  // function handlePlus() {
  //   // setCounter(counter + 1);
  //   setCounter((prev) => prev + 1);
  //   console.log(counter);
  // }
  // const handleMinus = () => {
  //   setCounter((prev) => prev - 1);
  // };

  // const resetCounter = () => {
  //   setCounter(initialValue);
  // };

  return (
    <div className={style.counterCard}>
      <h2>Counter: {counter}</h2>
      <button type="button" onClick={decrement}>
        -1
      </button>
      <button type="button" onClick={increment}>
        +1
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
export default Counter;

// создайте кнопку -1, которая бы уменьшала значения counter на 1
// дополнительно создайте кнопку reset, которая бы сбрасывала значения counter до нуля
// дополнительно, добавьте стили






