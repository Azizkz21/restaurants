import { useState } from "react";
import { restaurants } from "../materials/mock";
import { Restaurant } from "../restaurants/Restaurants";
import { Tab } from "../tab/Tab";
import style from "./restaurantsPage.module.scss";


export const RestaurantsPage = ({ title }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );

  const activeChangeRestaurant = (id) => {
    if (activeRestaurantId !== id) {
      setActiveRestaurantId(id);
    }
  };

  return (
    <div className={style.restaurantsPageWrapper}>
      <h1 className={"visuallyHidden"}>{title}</h1>
      <nav className={style.restaurantsPageNav}>
        <ul className={style.restaurantsPageList}>
          {restaurants.map(({ name, id }) => (
            <li className={style.restaurantsPageItem} key={id}>
              <Tab
                key={id}
                title={name}
                onClick={() => activeChangeRestaurant(id)}
                isActive={id === activeRestaurant}
              />
            </li>
          ))}
        </ul>
      </nav>

      <div className={style.restaurantsPageMenu}>
        {activeRestaurant && (
          <Restaurant
            key={activeRestaurant.id}
            name={activeRestaurant.name}
            menu={activeRestaurant.menu}
            reviews={activeRestaurant.reviews}
          />
        )}
      </div>
    </div>
  );
};
