import { useDispatch, useSelector } from "react-redux";
import { Restaurant } from "./Restaurants";
import {
  selectRestaurantsById,
  selectRestaurantsRequestStatusId,
} from "../../../redux/restaurants";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getRestaurantId } from "../../../redux/restaurants/get-restaurantId";
import { IDLE, PENDING, REJECTED } from "../../../constats/constats";

export const RestaurantContainer = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantId(id));
  }, [dispatch, id]);
  const restaurant = useSelector((state) => selectRestaurantsById(state, id));
  const requestStatus = useSelector(selectRestaurantsRequestStatusId);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return "loading";
  }

  if (requestStatus === REJECTED) {
    return <div>Error</div>;
  }


  const { name } = restaurant || {};
  return <Restaurant name={name} />;
};
