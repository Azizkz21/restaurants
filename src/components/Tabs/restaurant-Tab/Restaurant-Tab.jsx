import { NavLink } from "react-router-dom";
import style from "./restaurantTab.module.scss";
import classnames from "classnames";

export const RestaurantTab = ({ id, name }) => {
  return (
    <NavLink
      to={id}
      className={classnames(
        style.restaurantsTabLink,
        ({ isActive }) => isActive && "active"
      )}
    >
      {name}
    </NavLink>
  );
};
