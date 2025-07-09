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
// <p> с 


// import styles from './ProfileCard.module.css';

// Компонент ProfileCard
// принимает три пропса: avatar, name и description


interface Props {
  avatar: string;
    name: string;
    description: string;
}
export default function ProfileCard({ avatar, name, description }: Props) {
  return (
    <div className="profile-card">
        <img src={avatar} alt="User avatar" />
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
    );
}