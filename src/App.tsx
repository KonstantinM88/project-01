import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./providers/AuthProvider";
import { CounterProvider } from "./providers/CounterProvider";

function App() {
  return (
    <>
      <BrowserRouter>
      <AuthProvider>
        <CounterProvider>
        <AppRoutes />
        </CounterProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
// import './App.css'
// // import Greeting from './components/Greeting/Greeting'
// // import ThankYou from './components/ThankYou/ThankYou'
// // import Goodbye from './components/Goodbye/Goodbye'
// // import ProfileCard from './components/ProfileCard/ProfileCard'
// // import Card from './components/Card/Card'
// // import catPicture from "./assets/b.jpg"
// // import { Counter } from './components/Counter/Counter'
// // import PersonalGreeting from './components/PersonalGreeting/PersonalGreeting'
// // import React from 'react';
// // import { SpaceMissionForm } from './components/SpaceMissionForm/SpaceMissionForm'
// // import Demo from './components/Demo/Demo'
// import { AgePredictor } from './components/AgePredictor/AgePredictor'
// import { GenderPredictor } from './components/GenderPredictor/GenderPredictor'
// import { Routes, Link } from 'react-router-dom'
// import { BrowserRouter as BrowserRoute, Route } from 'react-router-dom';
// import { Counter } from './components/Counter/Counter'
// import Registration from './pages/Registration/Registration'
// import Home from './pages/Home/Home';
// import NotFound from './pages/NotFound/NotFound';

// function App() {
 
// // Создайте компонент, который бы возвращал div
// // с текстом "Thank you for using our services!
// // назовите его "ThankYou"
// // Отобразите его рядом с компонентом Greeting
// // Пришлите код App и код компонента
// //---------------------HW----------------------------
// // 🧩 Задание 1:
// // 1. Создайте новый компонент Goodbye, который отображает следующий текст внутри тега <div>:
// // "We hope to see you again soon!"

// // Назовите компонент Goodbye.
// // Отобразите его рядом с компонентом Greeting.
// // Отправьте код файла App.js и код самого компонента Goodbye.
// //----------------------HW2----------------------------
// // 🎨 Задание 2:
// // Создайте компонент ProfileCard, который будет отображать информационную карточку пользователя.

// // Компонент должен:

// // Принимать три пропса:

// // avatar — ссылка на изображение профиля
// // name — имя пользователя
// // description — краткое описание пользователя
// // Возвращать разметку, в которой:

// // есть <div> с классом profile-card

// // внутри него:

// // <img> с src={avatar} и alt="User avatar"
// // <h2> с именем
// // <p> с описанием
// // const name = "Viktor"; 
// return (
//     <>

    
//     <BrowserRoute>
   

//     <Routes>
//       <Route>
//       <Route index element={<Home />} />
//         <Route path="/registration" element={<Registration />} />
//         <Route path="/gender-predictor" element={<GenderPredictor />} />
//         <Route path="/age-predictor" element={<AgePredictor />} />
//         <Route path="/counter" element={<Counter />} />
//         <Route path='*' element={<NotFound />} />
//       </Route>
        
//       </Routes>

//       </BrowserRoute>
//     {/* <GenderPredictor />
//     <AgePredictor/>
//     <Demo />
//     <SpaceMissionForm />
//     <Counter />
//     <PersonalGreeting />
//     <Greeting name={name} />
//     <Greeting name={"Evgeniy"} age={18}/>
//     <Goodbye name={name} /> */}
//     {/* <Goodbye name={"Evgeniy"} /> */}
//     {/* <ProfileCard
//         // avatar="https://u.to/zr9OIg "
//         avatar="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT46P-EwSL0RvKRXM-4tRU3sQLX8mxYHnWo4GPVMhqFbjDYiQqZq9jGcDsXaETkbxraTPIL5lfuTbd5YJjVS4Ca2NdiYrWkB2Ga2tCqgHg"
//         name="John Doe"
//         description="A passionate developer."
//       />
//     <ProfileCard
//       //  avatar="https://u.to/2r9OIg "
//         avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEw9tV94lQzazcryxEpr8lIdv7t7Unc0roQcJLNub3ud_60sXZOwJqnv8&s"
//         name="Jane Smith"
//         description="A creative designer."
//       />
//     <ThankYou />
//     <Card
//         url={
//           "https://www.worldsbestcatlitter.com/wp-content/uploads/2019/12/02_coughing-cat-meme.jpg"
//         }
//         alt="cat meme"

//         />
//         <img src="/a.jpg" alt="cat meme" />
//         <img src={catPicture} alt="cat" /> */}
      

//     // {/* comment */}
//     // </>
//   );
// }

// export default App
