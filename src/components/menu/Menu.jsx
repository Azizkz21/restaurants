import style from "./menu.module.scss";
import { RestaurantActiveMenu } from "../restaurantActiveMenu/restaurantActiveMenu";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantsByIds } from "../../redux/restaurants";

export const Menu = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantsByIds(state, restaurantId)
  );

  return (
    <div className={style.menuInner}>
      <ul className={style.menuList}>
        {restaurant.menu.map((id) => (
          <li className={style.menuItem} key={id}>
            <RestaurantActiveMenu key={id}  id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
