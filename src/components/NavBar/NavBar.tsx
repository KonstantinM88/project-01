import { ROUTES } from "../../constants/routes";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
import { useCurrentUser } from "../../hooks/useCurrentUser";
// import Counter from "../Counter/Counter";
import { useCounter } from "../../hooks/useCounter";

export const NavBar = () => {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? styles.navLinkActive : styles.navLink;
  };

  const {counter} = useCounter();
  
  const { user, setIsAuthorized, isAuthorized } = useCurrentUser();

function handleLogout() {
  setIsAuthorized(false);

  localStorage.removeItem("accessToken");
  localStorage.removeItem("isAuthorized");
  // setUser(undefined);
}

  return (
    <>
      <nav className="flex justify-center items-center gap-4 flex-wrap bg-pink-200 min-h-14 p-6">
      {/* <nav className={styles.navBar}> */}
        <NavLink to="/" className={classSelector}>
          Home
        </NavLink>
        <NavLink to={ROUTES.REGISTRATION} className={classSelector}>
          Sign Up
        </NavLink>
        <NavLink to={ROUTES.LOGIN} className={classSelector}>
          Sign In
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
        <NavLink to={ROUTES.ADD_PRODUCT} className={classSelector}>
          Add Product
        </NavLink>
        <NavLink to={ROUTES.USERS} className={classSelector}>
          Users
        </NavLink>
        <NavLink to={"/galery"} className={classSelector}>
          Galery
        </NavLink>
        {/* <Navlink to={"/toggle-card"} className={classSelector}>
          ToggleCard */}
         {/* </Navlink> */}
        {user?.email}
        {counter}

        {isAuthorized ? (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        ) : null}
      </nav>
    </>
  );
};
