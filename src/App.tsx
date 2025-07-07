import './App.css'
import Greeting from './components/Greeting/Greeting'
import ThankYou from './components/ThankYou/ThankYou'
import Goodbye from './components/Goodbye/Goodbye'
import ProfileCard from './components/ProfileCard/ProfileCard'
import Card from './components/Card/Card'
import catPicture from "./assets/b.jpg"

function App() {
 
// Создайте компонент, который бы возвращал div
// с текстом "Thank you for using our services!
// назовите его "ThankYou"
// Отобразите его рядом с компонентом Greeting
// Пришлите код App и код компонента
//---------------------HW----------------------------
// 🧩 Задание 1:
// 1. Создайте новый компонент Goodbye, который отображает следующий текст внутри тега <div>:
// "We hope to see you again soon!"

// Назовите компонент Goodbye.
// Отобразите его рядом с компонентом Greeting.
// Отправьте код файла App.js и код самого компонента Goodbye.
//----------------------HW2----------------------------
// 🎨 Задание 2:
// Создайте компонент ProfileCard, который будет отображать информационную карточку пользователя.

// Компонент должен:

// Принимать три пропса:

// avatar — ссылка на изображение профиля
// name — имя пользователя
// description — краткое описание пользователя
// Возвращать разметку, в которой:

// есть <div> с классом profile-card

// внутри него:

// <img> с src={avatar} и alt="User avatar"
// <h2> с именем
// <p> с описанием
const name = "Viktor"; 
return (
    <>
    <Greeting name={name} />
    <Greeting name={"Evgeniy"} age={18}/>
    <Goodbye name={name} />
    {/* <Goodbye name={"Evgeniy"} /> */}
    <ProfileCard
        avatar="https://u.to/zr9OIg "
        name="John Doe"
        description="A passionate developer."
      />
    <ProfileCard
        avatar="https://u.to/2r9OIg "
        name="Jane Smith"
        description="A creative designer."
      />
    <ThankYou />
    <Card
        url={
          "https://www.worldsbestcatlitter.com/wp-content/uploads/2019/12/02_coughing-cat-meme.jpg"
        }
        alt="cat meme"

        />
        <img src="/a.jpg" alt="cat meme" />
        <img src={catPicture} alt="cat" />
      </>

    // {/* comment */}
    // </>
  );
}

export default App
