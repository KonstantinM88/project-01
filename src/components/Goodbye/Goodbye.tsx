// 🧩 Задание 1:
// 1. Создайте новый компонент Goodbye, который отображает следующий текст внутри тега <div>:
// "We hope to see you again soon!"

// Назовите компонент Goodbye.
// Отобразите его рядом с компонентом Greeting.
// Отправьте код файла App.js и код самого компонента Goodbye.
interface Props {
  name: string;
}

export default function Goodbye(props: Props) {
  // с помощью деструктуризации получили нужный параметр из пропсов
  const { name } = props;
  return (
    <div>
      We hope to see you again soon, {name}!
    </div>
  );
}






    