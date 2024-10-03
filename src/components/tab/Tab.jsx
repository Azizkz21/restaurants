import classNames from "classnames";
import style from "./tab.module.scss";

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <button
      className={classNames(style.button__tab)}
      disabled={isActive}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
