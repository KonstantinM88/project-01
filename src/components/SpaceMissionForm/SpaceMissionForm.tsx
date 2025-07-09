// Задание: Форма космической миссии
// Создайте React-компонент SpaceMissionForm, в котором будет форма регистрации для участия в космической миссии.

// 🔧 Требования:
// Используйте useState для управления состоянием.

// Добавьте инпут для ввода имени астронавта.

// Добавьте селект с выбором планеты назначения (например: Mars, Venus, Jupiter, Saturn).

// Выведите текст вида:

// 🧑‍🚀 Astronaut Имя is headed to Планета!

// Если имя не введено — выводите сообщение:

// Please enter your name to begin your mission.

// 💡 Подсказки:
// Инпут должен быть контролируемым: значение задается через useState, а изменение — через onChange.
// Селект тоже должен быть контролируемым.
// Используйте условный рендеринг, чтобы показывать разные сообщения в зависимости от введённых данных.
// 📝 Пример:
// Если пользователь ввел имя "Alex" и выбрал "Saturn", должно отображаться:

// 🧑‍🚀 Astronaut Alex is headed to Saturn!
// import { useState } from "react";
// import Planet from "./Planet";

// export const SpaceMissionForm = () => {
//   const [fullName, setFullName] = useState("Fred Smith");

// //   enum Planet {
// //     Mars = "Mars",
// //     Venus = "Venus",
// //     Jupiter = "Jupiter",
// //     Saturn = "Saturn",
// //   }

//     // const options = {
//     //     MARS: "Mars",
//     //     VENUS: "Venus",
//     //     JUPITER: "Jupiter",
//     //     SATURN: "Saturn",
//     // };
//   const [planet, setPlanet] = useState<string>(options.MARS);

//   return (
//     <div>
//       <input
//         type="text"
//         value={fullName}
//         onChange={(event) => setFullName(event.target.value)}
//       />
//       <select
//         onChange={(event) => setPlanet(event.target.value)}
//         value={planet}
//       >
//         <option value={options.MARS}>{options.MARS}</option>
//         <option value={options.VENUS}>{options.VENUS}</option>
//         <option value={options.JUPITER}>{options.JUPITER}</option>
//         <option value={options.SATURN}>{options.SATURN}</option>
//       </select>
//       {fullName ? (
//         <p>
//           🧑‍🚀 Astronaut {fullName} is headed to {planet}!
//         </p>
//       ) : (
//         <p>Please enter your name to begin your mission.</p>
//       )}
//     </div>
//   );
// };
import { useState } from "react";
import Planet from "./Planet";

export const SpaceMissionForm = () => {
  const [fullName, setFullName] = useState("Fred Smith");
  const [planet, setPlanet] = useState<string>(Planet.MARS);

  return (
    <div>
      <input
        type="text"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
      />
      <select
        onChange={(event) => setPlanet(event.target.value)}
        value={planet}
      >
        <option value={Planet.MARS}>{Planet.MARS}</option>
        <option value={Planet.VENUS}>{Planet.VENUS}</option>
        <option value={Planet.JUPTITER}>{Planet.JUPTITER}</option>
        <option value={Planet.SATURN}>{Planet.SATURN}</option>
      </select>
      {fullName ? (
        <p>
          🧑‍🚀 Astronaut {fullName} is headed to {planet}!
        </p>
      ) : (
        <p>Please enter your name to begin your mission.</p>
      )}
    </div>
  );
};