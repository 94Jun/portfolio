import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
const Nav = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return isActive ? styles.active : "";
      }}
    >
      <li className={styles.item}>{children}</li>
    </NavLink>
  );
};

export default Nav;
