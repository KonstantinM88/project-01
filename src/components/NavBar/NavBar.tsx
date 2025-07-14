import { ROUTES } from "../../constants/routes";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? styles.navLinkActive : styles.navLink;
  };
  return (
    <>
      <nav className={styles.navBar}>
        <NavLink to="/" className={classSelector}>
          Home
        </NavLink>
        <NavLink to={ROUTES.REGISTRATION} className={classSelector}>
          Sign Up
        </NavLink>
        <NavLink to={ROUTES.GENDER_PREDICTOR} className={classSelector}>
          Gender predictor
        </NavLink>
        <NavLink to="/age-predictor" className={classSelector}>
          Age predictor
        </NavLink>
        <NavLink to="/counter">Counter</NavLink>
        <NavLink to="/pony" className={classSelector}>
          Pony
        </NavLink>
        <NavLink to={ROUTES.ABOUT} className={classSelector}>
          About
        </NavLink>
        <NavLink to={ROUTES.ACCOUNT} className={classSelector}>
          Account
        </NavLink>
        <NavLink to="/products" className={classSelector}>
          Products
        </NavLink>
      </nav>
    </>
  );
};

