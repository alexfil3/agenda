import svg from "../../svg/sprite.svg";
import css from "./SvgIcon.module.css";

function SvgIcon({ id, onClick }) {
  return (
    <svg className={css.svg} onClick={onClick}>
      <use href={`${svg}#${id}`} />
    </svg>
  );
}

export default SvgIcon;
