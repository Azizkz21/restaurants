import { useParams } from "react-router-dom";
import { RestaurantContainer } from "../../Restaurant/restaurants/RestaurantContainer";


export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  

  return <RestaurantContainer id={restaurantId} />;
};
