import { useState } from "react";
import { Layout } from "../layout/Layout";
import { restaurants } from "../materials/mock";
import { Restaurant } from "../restaurants/Restaurants";
import { Tabs } from "../tabs/Tabs";

export const App = ({ title }) => {
  const [restaurantId, setRestaurantId] = useState(restaurants[0].id);

  const activeChangeRestaurant = (id) => {
    if (restaurantId !== id) {
      setRestaurantId(id);
    }
  };

  return (
    <div>
      <Layout>
        <h1>{title}</h1>
        <Tabs
          restaurants={restaurants}
          activeChangeRestaurant={activeChangeRestaurant}
        />
        <Restaurant
          {...restaurants.find((restaurants) => restaurants.id == restaurantId)}
        />
      </Layout>
    </div>
  );
};
