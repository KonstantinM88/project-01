import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import styles from "./MainLayout.module.css";

export const MainLayout = () => {
  return (
    <div className={styles.container}>
      <header>
        <NavBar />
      </header>
      <Outlet />
      <footer>
        <a href="">Instagram</a>
      </footer>
      </div>
  );
};
