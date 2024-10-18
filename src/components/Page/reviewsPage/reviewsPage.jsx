import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectRestaurantsById } from "../../../redux/restaurants";
import { Reviews } from "../../Review/reviews/Reviews";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const restaurantReviews = useSelector((state) =>
    selectRestaurantsById(state, restaurantId)
  );

  return <Reviews reviewId={restaurantReviews} />;
};
