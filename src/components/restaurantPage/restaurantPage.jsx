import { useParams } from "react-router-dom";
import { RestaurantContainer } from "../restaurants/RestaurantContainer";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return <RestaurantContainer id={restaurantId} />;
};