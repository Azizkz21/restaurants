import { useParams } from "react-router-dom";
import style from "./dishPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDishById,
  selectDishRequestStatusId,
} from "../../../redux/dishes";
import { useLoginUser } from "../../Context/loginContext/useLoginUser";
import { DishCounter } from "../../Count/dishCounter/DishCounter";
import { useEffect } from "react";
import { getDish } from "../../../redux/dishes/get-dish";
import { IDLE, PENDING, REJECTED } from "../../../constats/constats";

export const DishPage = () => {
  const dispatch = useDispatch();
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));
  const requestStatus = useSelector(selectDishRequestStatusId);
  const { name, price, ingredients } = dish;
  const { login } = useLoginUser();

  useEffect(() => {
    dispatch(getDish(dishId));
  }, [dispatch, dishId]);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return "Loading...";
  }

  if (requestStatus === REJECTED) {
    return <div>Error</div>;
  }

  if (!name) {
    return null;
  }

  return (
    <section>
      <div className={style.dishPageWrapper}>
        <div className={style.dishBlock}>
          <h3>{name}</h3>
          <p>{price} USD</p>
          <span className={style.dishIngredients}>
            {ingredients.join(", ")}
          </span>
          {login ? <DishCounter /> : null}
        </div>
      </div>
    </section>
  );
};
