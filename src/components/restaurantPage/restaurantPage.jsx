import { useParams } from "react-router-dom";
import { RestaurantsContainer } from "../restaurants/RestaurantsContainer";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();


  return <RestaurantsContainer id={restaurantId} />;
};
