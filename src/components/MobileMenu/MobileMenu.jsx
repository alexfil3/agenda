import { NavLink } from "react-router-dom";
import css from "./MobileMenu.module.css";

function MobileMenu({ onClick }) {
  return (
    <div className={`${css.menu} container`}>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li className={css.item} onClick={onClick}>
            <NavLink to="goals">Goals for year</NavLink>
          </li>
          <li className={css.item} onClick={onClick}>
            <NavLink to="fortune">Fortune</NavLink>
          </li>
          <li className={css.item} onClick={onClick}>
            <NavLink to="month">Month plan</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
