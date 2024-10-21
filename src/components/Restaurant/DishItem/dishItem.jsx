import { useDispatch, useSelector } from "react-redux";
import style from "./dishItem.module.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { IDLE, PENDING, REJECTED } from "../../../constats/constats";
import { getDish } from "../../../redux/entities/dishes/get-dish";
import {
  selectDishById,
  selectDishRequestStatusId,
} from "../../../redux/entities/dishes";

export const DishItem = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDish(id));
  }, [dispatch, id]);
  const dish = useSelector((state) => selectDishById(state, id));
  const requestStatus = useSelector(selectDishRequestStatusId);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return "Loading...";
  }

  if (requestStatus === REJECTED) {
    return <div>Error</div>;
  }

  if (!dish) {
    return null;
  }
  return (
    <div className={style.menuBlock}>
      <Link to={`/dish/${id}`}>{dish.name}</Link>
    </div>
  );
};
