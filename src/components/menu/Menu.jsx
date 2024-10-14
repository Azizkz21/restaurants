import style from "./menu.module.scss";
import { RestaurantMenu } from "../restaurantMenu/restaurantMenu";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../../redux/restaurants";

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
            <RestaurantMenu id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
