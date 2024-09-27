import { useState } from "react";
import { restaurants } from "../materials/mock";
import { Restaurant } from "../restaurants/Restaurants";
import { Tab } from "../tab/Tab";

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
    <div>
      <h1>{title}</h1>
      {restaurants.map(({ name, id }) => (
        <Tab
          key={id}
          title={name}
          onClick={() => activeChangeRestaurant(id)}
          isActive={id === activeRestaurant}
        />
      ))}

      {activeRestaurant && (
        <Restaurant
          key={activeRestaurant.id}
          name={activeRestaurant.name}
          menu={activeRestaurant.menu}
          reviews={activeRestaurant.reviews}
        />
      )}
    </div>
  );
};
