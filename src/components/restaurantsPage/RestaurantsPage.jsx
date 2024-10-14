import { useSelector } from "react-redux";
import { selectRestaurantsId } from "../../redux/restaurants";
import { RestaurantTab } from "../restaurant-Tab/Restaurant-Tab";
import style from "./restaurantsPage.module.scss";
import { Outlet } from "react-router-dom";

export const RestaurantsPage = ({ title }) => {
  const restaurantsIds = useSelector(selectRestaurantsId);

  return (
    <>
      {restaurantsIds.length > 0 && (
        <div className={style.restaurantsPageWrapper}>
          <h1>{title}</h1>
          <div className={style.restaurantsPage}>
            <ul className={style.restaurantsPageList}>
              {restaurantsIds.map((id) => (
                <li key={id} className={style.restaurantsPageItem}>
                  <RestaurantTab key={id} id={id} />
                </li>
              ))}
            </ul>
          </div>
          <div className={style.restaurantsPageMenu}>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};
