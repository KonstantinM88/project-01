import styles from "./Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
      {/* You can add more components or content here */}
    </div>
  );
}
