import { useContext, useEffect } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounter = (start: number = 0) => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }

    const { setCounter, counter } = context;

    useEffect(() => {
        setCounter(start);
    }, [setCounter, start]); 

    function decrement() {
      setCounter((prev: number) => prev - 1);
    }
    function increment() {
      setCounter((prev: number) => prev + 1);
    }
    function reset() {
      setCounter(0);
    }
    return { counter, increment, decrement, reset };

  };


