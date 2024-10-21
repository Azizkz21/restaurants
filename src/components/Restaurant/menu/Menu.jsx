import style from "./menu.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DishItem } from "../DishItem/DishItem";
import { selectRestaurantsById } from "../../../redux/entities/restaurants";

export const Menu = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantsById(state, restaurantId)
  );

  return (
    <div className={style.menuInner}>
      <ul className={style.menuList}>
        {restaurant.menu.map((id) => (
          <li className={style.menuItem} key={id}>
            <DishItem id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
