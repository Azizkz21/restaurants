import { useDispatch, useSelector } from "react-redux";
import style from "./restaurantsPage.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { RestaurantTab } from "../../Tabs/restaurant-Tab/Restaurant-Tab";
import { useEffect } from "react";
import { IDLE, PENDING, REJECTED } from "../../../constats/constats";
import { getRestaurants } from "../../../redux/entities/restaurants/get-restaurants";
import { selectRestaurantsId, selectRestaurantsRequestStatus } from "../../../redux/entities/restaurants";

export const RestaurantsPage = ({ title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(
      getRestaurants({ onError: () => navigate({ to: ":restaurantId" }) }),
      [dispatch, navigate]
    );
  });
  const restaurantsIds = useSelector(selectRestaurantsId);
  const requestStatus = useSelector(selectRestaurantsRequestStatus);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return "loading";
  }

  if (requestStatus === REJECTED) {
    return <div>Error</div>;
  }

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
