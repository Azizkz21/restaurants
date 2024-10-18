import { Button } from "../../UI-Button/button";
import style from "./tab.module.scss";

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <Button
      isActive={isActive}
      onClick={onClick}
      text={title}
      className={style.buttonTab}
    />
  );
};
