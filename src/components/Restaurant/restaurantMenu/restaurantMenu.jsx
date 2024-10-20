import { useDispatch, useSelector } from "react-redux";
import style from "./restaurantMenu.module.scss";
import {
  selectDishById,
  selectDishRequestStatusId,
} from "../../../redux/dishes";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getDish } from "../../../redux/dishes/get-dish";
import { IDLE, PENDING, REJECTED } from "../../../constats/constats";

export const RestaurantMenu = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDish(id));
  }, [dispatch, id]);
  const dishe = useSelector((state) => selectDishById(state, id));
  const requestStatus = useSelector(selectDishRequestStatusId);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return "Loading...";
  }

  if (requestStatus === REJECTED) {
    return <div>Error</div>;
  }

  if (!dishe) {
    return null;
  }
  return (
    <div className={style.menuBlock}>
      <Link to={`/dish/${id}`}>{dishe.name}</Link>
    </div>
  );
};
