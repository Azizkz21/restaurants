import { useParams } from "react-router-dom";
import style from "./dishPage.module.scss";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/dish";
import { DishCounter } from "../dishCounter/DishCounter";
import { useLoginUser } from "../loginContext/useLoginUser";

export const DishPage = () => {
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));
  const { name, price, ingredients } = dish;
  const { login } = useLoginUser();
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
