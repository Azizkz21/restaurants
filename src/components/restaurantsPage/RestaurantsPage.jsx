import { useState } from "react";
import { restaurants } from "../materials/mock";
import { Restaurant } from "../restaurants/Restaurants";
import { Tab } from "../tab/Tab";
import style from "./restaurantsPage.module.scss";
import classNames from "classnames";

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
    <div className={classNames(style["restaurantsPage__wrapper"])}>
      <h1 className={"visually-hidden"}>{title}</h1>
      <nav className={classNames(style["restaurantsPage__nav"])}>
        <ul className={classNames(style["restaurantsPage__list"])}>
          {restaurants.map(({ name, id }) => (
            <li className={classNames(style["restaurantsPage__item"])} key={id}>
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

      <div className={classNames(style["restaurantsPage__menu"])}>
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
