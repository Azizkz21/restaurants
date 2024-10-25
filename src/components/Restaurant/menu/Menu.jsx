import style from "./menu.module.scss";
import { useParams } from "react-router-dom";
import { DishItem } from "../DishItem/DishItem";
import { useGetDishesQuery } from "../../../redux/services/api/api";

export const Menu = () => {
  const { restaurantId } = useParams();

  const { data, isLoading, isError } = useGetDishesQuery(restaurantId);

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data?.length) {
    return null;
  }

  return (
    <div className={style.menuInner}>
      <ul className={style.menuList}>
        {data.map(({ id, name }) => (
          <li className={style.menuItem} key={id}>
            <DishItem id={id} name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
