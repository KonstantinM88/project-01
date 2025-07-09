import React, { useState } from 'react';

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

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const handlePlus = () => {
    setCounter((prev) => prev + 1);
  };

  const handleMinus = () => {
    setCounter((prev) => prev - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Counter: {counter}</h2>
      <div style={styles.buttons}>
        <button style={styles.button} onClick={handlePlus}>+1</button>
        <button style={styles.button} onClick={handleMinus}>-1</button>
        <button style={styles.button} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

// inline стили
const styles = {
  container: {
    textAlign: 'center' as const,
    padding: '20px',
    fontFamily: 'Arial',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  }
};





