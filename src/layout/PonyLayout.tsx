import { Link, Outlet } from "react-router-dom";
import styles from "./PonyLayout.module.css"; 

export const PonyLayout = () => {
  return (
    <div className={styles.container}>
      <h2>PonyLayout</h2>
      <nav>
        <Link to="/pony/my-pony">My pony</Link>
        <Link to="/pony/buy-pony">Buy pony</Link>
      </nav>
      <Outlet />
    </div>
  );
};
