import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/restaurants";
import { RestaurantsTab } from "../restaurants-Tab/Restaurants-Tab";
import style from "./restaurantsPage.module.scss";
import { Outlet } from "react-router-dom";

export const RestaurantsPage = ({ title }) => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <>
      {restaurantsIds.length > 0 && (
        <div className={style.restaurantsPageWrapper}>
          <h1>{title}</h1>
          <div className={style.restaurantsPage}>
            <ul className={style.restaurantsPageList}>
              {restaurantsIds.map((id) => (
                <li key={id} className={style.restaurantsPageItem}>
                  <RestaurantsTab key={id} id={id} />
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
