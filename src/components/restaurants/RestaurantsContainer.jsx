import { useSelector } from "react-redux";
import { selectRestaurantsByIds } from "../../redux/restaurants";
import { Restaurant } from "./Restaurants";

export const RestaurantsContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantsByIds(state, id));
  const { name } = restaurant || {};
  return <Restaurant name={name} />;
};
