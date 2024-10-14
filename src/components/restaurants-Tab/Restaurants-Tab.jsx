import { useSelector } from "react-redux";
import { selectRestaurantsByIds } from "../../redux/restaurants";
import { NavLink } from "react-router-dom";
import style from "./restaurantTab.module.scss";
import classnames from "classnames";

export const RestaurantsTab = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantsByIds(state, id));
  if (!restaurant) {
    return null;
  }

  return (
    <NavLink
      to={id}
      className={classnames(
        style.restaurantsTabLink,
        ({ isActive }) => isActive && "active"
      )}
    >
      {restaurant.name}
    </NavLink>
  );
};
