import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import styles from "../../commonStyles/commonStyles.module.css";
import cloud from "../../svg/cloud.svg";

function Header() {
  return (
    <header className={css.header}>
      <NavLink to="/" className={styles.svgWrapper}>
        {/*  <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 13.6493C3 16.6044 5.41766 19 8.4 19h8.1c2.4853 0 4.5-2.0161 4.5-4.5031 0-1.8466-1.1107-3.552-2.7-4.2469C18.1317 7.32251 15.684 5 12.6893 5 10.3514 5 8.34694 6.48637 7.5 8.5 4.8 8.9375 3 11.2001 3 13.6493Z"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> */}
      </NavLink>
      <NavLink to="signup">Sign Up</NavLink>
      <svg>
        <use href={`${cloud}#icon`} />
      </svg>
      {/* <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        // xml:space="preserve"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
      >
        <path
          fill="none"
          d="M0 0h1280v800H0z"
          transform="translate(-1024 -192)"
        />
        <path
          fillRule="nonzero"
          d="M103.288 8.535h212.447v34.133H103.288z"
          transform="matrix(.2251 0 0 .17555 -15.24765192 42.35286814)"
        />
        <path
          fillRule="nonzero"
          d="M103.288 8.535h212.447v34.133H103.288z"
          transform="matrix(.2251 0 0 .17555 -15.0379454 27.431458)"
        />
        <path
          fillRule="nonzero"
          d="M103.288 8.535h212.447v34.133H103.288z"
          transform="matrix(.2251 0 0 .17555 -15.0379454 12.51004786)"
        />
      </svg> */}
    </header>
  );
}

export default Header;
