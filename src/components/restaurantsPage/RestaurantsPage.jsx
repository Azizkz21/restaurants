import { useState } from "react";
import { Restaurant } from "../restaurants/Restaurants";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/restaurants";
import { RestaurantsTab } from "../restaurants-Tab/Restaurants-Tab";
import style from "./restaurantsPage.module.scss";

export const RestaurantsPage = ({ title }) => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0]
  );

  const activeChangeRestaurant = (id) => {
    if (activeRestaurantId !== id) {
      setActiveRestaurantId(id);
    }
  };

  return (
    <>
      {restaurantsIds.length > 0 && (
        <div className={style.restaurantsPageWrapper}>
          <h1 className={"visuallyHidden"}>{title}</h1>
          <nav className={style.restaurantsPageNav}>
            <ul className={style.restaurantsPageList}>
              {restaurantsIds.map((id) => (
                <li key={id} className={style.restaurantsPageItem}>
                  <RestaurantsTab
                    key={id}
                    id={id}
                    onClick={() => activeChangeRestaurant(id)}
                    isActive={id === activeRestaurantId}
                  />
                </li>
              ))}
            </ul>
          </nav>
          <div className={style.restaurantsPageMenu}>
            <Restaurant key={activeRestaurantId} id={activeRestaurantId} />
          </div>
        </div>
      )}
    </>
  );
};
