import { useState } from "react";
import { NavLink } from "react-router-dom";
import SvgIcon from "../SvgIcon/SvgIcon";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
import css from "./Header.module.css";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleBurgerToggle = () => {
    const body = document.querySelector("body");
    if (body.classList.contains("overflow-hidden")) {
      body.classList.remove("overflow-hidden");
    } else {
      body.classList.add("overflow-hidden");
    }

    setIsOpenMenu((state) => !state);
  };

  const handleNavLinkClick = () => {
    if (isOpenMenu) {
      handleBurgerToggle();
    }
    window.scrollTo(0, 0);
  };

  return (
    <header className={`${css.header} container`}>
      <NavLink to="/" className={css.svgWrapper} onClick={handleNavLinkClick}>
        <SvgIcon id="cloud" />
      </NavLink>
      <div className={css.burgerWrapper}>
        <nav className={css.nav}>
          <DesktopMenu />
          <NavLink
            to="/signup"
            className={css.authLink}
            onClick={handleNavLinkClick}
          >
            Sign Up
          </NavLink>
        </nav>
        {isOpenMenu ? (
          <button className={css.button}>
            <SvgIcon id="burger-close" onClick={handleBurgerToggle} />
          </button>
        ) : (
          <button className={css.button}>
            <SvgIcon id="burger-open" onClick={handleBurgerToggle} />
          </button>
        )}
      </div>
      {isOpenMenu && <MobileMenu onClick={handleNavLinkClick} />}
    </header>
  );
}

export default Header;
