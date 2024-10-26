import style from "./dishItem.module.css";
import { NavLink } from "react-router-dom";

export const DishItem = ({ id, name }) => {
  return (
    <div className={style.menuBlock}>
      <NavLink to={`/dish/${id}`}>{name}</NavLink>
    </div>
  );
};
