import { useSelector } from "react-redux";
import { selectRestaurantsByIds } from "../../redux/restaurants";
import { Tab } from "../tab/Tab";

export const RestaurantsTab = ({ id, onClick, isActive}) => {
  const restaurant = useSelector((state) => selectRestaurantsByIds(state, id));
  if (!restaurant) {
    return null;
  }

  return (
    <Tab
      title={restaurant.name}
      onClick={onClick}
      isActive={isActive}
    />
  );
};
