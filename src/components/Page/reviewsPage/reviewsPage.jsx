import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectRestaurantsById } from "../../../redux/restaurants";
import { Reviews } from "../../Review/reviews/Reviews";
import { useEffect } from "react";
import { getReviews } from "../../../redux/reviews/get-reviews";
import { getUsers } from "../../../redux/users/get-users";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews(restaurantId));
  }, [dispatch, restaurantId]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  
  const restaurantReviews = useSelector((state) =>
    selectRestaurantsById(state, restaurantId)
  );

  return <Reviews review={restaurantReviews} />;
};
