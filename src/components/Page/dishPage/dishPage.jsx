import { useParams } from "react-router-dom";
import style from "./dishPage.module.scss";
import { useLoginUser } from "../../Context/loginContext/useLoginUser";
import { DishCounter } from "../../Count/dishCounter/DishCounter";
import { useGetDishByIdQuery } from "../../../redux/services/api/api";

export const DishPage = () => {
  const { dishId } = useParams();
  const { login } = useLoginUser();
  const { userName } = login;

  const { data, isLoading, isError } = useGetDishByIdQuery(dishId);

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data.name) {
    return null;
  }

  const { name, price, ingredients } = data || {};

  return (
    <section>
      <div className={style.dishPageWrapper}>
        <div className={style.dishBlock}>
          <h3>{name}</h3>
          <p>{price} USD</p>
          <span className={style.dishIngredients}>
            {ingredients.join(", ")}
          </span>
          {userName && <DishCounter id={dishId} />}
        </div>
      </div>
    </section>
  );
};
