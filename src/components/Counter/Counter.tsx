

// создайте кнопку -1, которая бы уменьшала значения counter на 1 
// дополнительно создайте кнопку reset, которая бы сбрасывала значения counter до нуля
// дополнительно, добавьте стили

// export const Counter = () => {

//     // const counter = 0;
//     const [counter, setCounter] = useState<number>(0);

//     function handlePlus(){
//         // counter++;
//         // setCounter(counter + 1);

//         setCounter((prevCounter) => prevCounter + 1);
//         console.log(counter);
//     }
//   return (
//     <div>
//         <h2>Counter: {counter}</h2>
//         <button type="button" onClick={handlePlus}>+1</button>
//     </div>
//   )
// }

// -----------------1---------------------------
// export const Counter = () => {
//   const [counter, setCounter] = useState<number>(0);

//   const handlePlus = () => {
//     setCounter((prev) => prev + 1);
//   };

//   const handleMinus = () => {
//     setCounter((prev) => prev - 1);
//   };

//   const handleReset = () => {
//     setCounter(0);
//   };

//   return (
//     <div>
//       <h2>Counter: {counter}</h2>
//       <button onClick={handlePlus}>+1</button>
//       <button onClick={handleMinus}>-1</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };

// -----------------2---------------------------

// import './Counter.css'; // если хочешь использовать отдельный CSS файл

// import React, { useState } from 'react';
// import style from "./Counter.module.css";

// export const Counter = () => {
//   const initialValue = 0;
//   const [counter, setCounter] = useState<number>(initialValue);
//   // tuple - кортеж
//   // state, local state - состояние
//   // setter function - функция сеттер
//   function handlePlus() {
//     // setCounter(counter + 1);
//     setCounter((prev) => prev + 1);
//     console.log(counter);
//   }
//   const handleMinus = () => {
//     setCounter((prev) => prev - 1);
//   };

//   const resetCounter = () => {
//     setCounter(initialValue);
//   };

//   return (
//     <div className={style.counterCard}>
//       <h2>Counter: {counter}</h2>
//       <button type="button" onClick={handleMinus}>
//         -1
//       </button>
//       <button type="button" onClick={handlePlus}>
//         +1
//       </button>
//       <button type="button" onClick={resetCounter}>
//         Reset
//       </button>
//     </div>
//   );
// };
// export default Counter;

// создайте кнопку -1, которая бы уменьшала значения counter на 1
// дополнительно создайте кнопку reset, которая бы сбрасывала значения counter до нуля
// дополнительно, добавьте стили






