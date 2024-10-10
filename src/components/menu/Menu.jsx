
import style from "./menu.module.scss";
import { RestaurantActiveMenu } from "../restaurantActiveMenu/restaurantActiveMenu";

export const Menu = ({ menu }) => {
  return (
    <div className={style.menuInner}>
      <ul className={style.menuList}>
        {menu.map((id) => (
          <li className={style.menuItem} key={id}>
            <RestaurantActiveMenu key={id} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
