import { useParams } from "react-router-dom";
import { ReviewsContainer } from "../../Review/reviews/reviews-container";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  return <ReviewsContainer id={restaurantId} />;
};
