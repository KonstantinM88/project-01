interface Props {
    name: string;
    age?: number; // age is optional
    // можно добавить другие параметры, например, email?: string;
  }
  
  export default function Greeting(props: Props) {
    // с помощью деструктуризации получили нужный параметр из пропсов
    const { name, age } = props;
    //   const name = "Evgenii";
    return <p>Hello, {name}! {age} </p>;
  }

  // 2. Создайте компонент с картинкой Card
  // пусть там будет тег img внутри контейнера div
  // пусть ссылка на картинку передается через пропсы url
  