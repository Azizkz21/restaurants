import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./restaurantTab.module.scss";
import classnames from "classnames";
import { selectRestaurantsById } from "../../../redux/entities/restaurants";


export const RestaurantTab = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantsById(state, id));
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
