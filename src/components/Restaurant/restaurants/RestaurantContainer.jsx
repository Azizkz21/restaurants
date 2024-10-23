import { useDispatch, useSelector } from "react-redux";
import { Restaurant } from "./Restaurants";
import {
  selectRestaurantsById,
  selectRestaurantsRequestStatusId,
} from "../../../redux/entities/restaurants";
import { useEffect } from "react";
import { IDLE, PENDING, REJECTED } from "../../../constats/constats";
import { getRestaurant } from "../../../redux/entities/restaurants/get-restaurantId";

export const RestaurantContainer = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant(id));
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
