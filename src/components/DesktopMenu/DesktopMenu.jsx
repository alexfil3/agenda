import { NavLink } from "react-router-dom";
import css from "./DesktopMenu.module.css";

function DesktopMenu() {
  return (
    <ul className={css.menu}>
      <li>
        <NavLink to="goals" className={css.navLink}>
          Goals for year
        </NavLink>
      </li>
      <li>
        <NavLink to="fortune" className={css.navLink}>
          Fortune
        </NavLink>
      </li>
      <li>
        <NavLink to="month" className={css.navLink}>
          Month
        </NavLink>
      </li>
    </ul>
  );
}

export default DesktopMenu;
