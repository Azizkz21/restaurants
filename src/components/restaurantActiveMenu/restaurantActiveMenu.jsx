import { useSelector } from "react-redux";
import style from "./restaurantActiveMenu.module.scss";
import { selectDishByIds } from "../../redux/dish";
import { Link } from "react-router-dom";

export const RestaurantActiveMenu = ({ id }) => {
  const dishe = useSelector((state) => selectDishByIds(state, id));
  if (!dishe) {
    return null;
  }
  return (
    <div className={style.menuBlock}>
      <Link to={`/dish/${id}`}>{dishe.name}</Link>
    </div>
  );
};
