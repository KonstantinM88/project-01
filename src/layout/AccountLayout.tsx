import { NavLink, Outlet } from "react-router-dom";
import { ACCOUNT_ROUTES } from "../constants/routes";
import styles from "./AccountLayout.module.css";

export const AccountLayout = () => {
  return (
    <div className={styles.container}>
      <nav>
        <NavLink to={ACCOUNT_ROUTES.ACCOUNT_INFO}>Account settings</NavLink>
        <NavLink to={ACCOUNT_ROUTES.ACCOUNT_SETTINGS}>
          Personal information
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
};
