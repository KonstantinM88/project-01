import './App.css'
import Greeting from './components/Greeting/Greeting'
import ThankYou from './components/ThankYou/ThankYou'
import Card from './components/Card/Card'
import catPicture from "./assets/b.jpg"

function App() {
 
// Создайте компонент, который бы возвращал div
// с текстом "Thank you for using our services!
// назовите его "ThankYou"
// Отобразите его рядом с компонентом Greeting
// Пришлите код App и код компонента
const name = "Viktor"; 
return (
    <>
    <Greeting name={name} />
    <Greeting name={"Evgeniy"} age={18}/>
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
