import { useSelector } from "react-redux";
import style from "./restaurantActiveMenu.module.scss";
import { selectDishByIds } from "../../redux/dish";

export const RestaurantActiveMenu = ({ id }) => {
  const dishe = useSelector((state) => selectDishByIds(state, id));
  if (!dishe) {
    return null;
  }
  return (
    <div className={style.menuBlock}>
      <h3>{dishe.name}</h3>
      <p>{dishe.price}</p>
      <span>{dishe.ingredients}</span>
    </div>
  );
};
