import style from "./restaurantsPage.module.scss";
import { Outlet } from "react-router-dom";
import { RestaurantTab } from "../../Tabs/restaurant-Tab/Restaurant-Tab";
import { useGetRestaurantsQuery } from "../../../redux/services/api/api";

export const RestaurantsPage = ({ title }) => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return "loading";
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data.length) {
    return null;
  }

  return (
    <>
      <div className={style.restaurantsPageWrapper}>
        <h1>{title}</h1>
        <div className={style.restaurantsPage}>
          <ul className={style.restaurantsPageList}>
            {data.map(({ id, name }) => (
              <li key={id} className={style.restaurantsPageItem}>
                <RestaurantTab key={id} id={id} name={name} />
              </li>
            ))}
          </ul>
        </div>
        <div className={style.restaurantsPageMenu}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
