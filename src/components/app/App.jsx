import { useState } from "react";
import { Layout } from "../layout/Layout";
import { restaurants } from "../materials/mock";
import { Restaurant } from "../restaurants/Restaurants";
import { Tabs } from "../tabs/Tabs";

export const App = ({ title }) => {
  const [restaurantName, setRestaurantName] = useState(restaurants[0].name);

  const renderRestaurant = (name) => {
    if (restaurantName !== name) {
      setRestaurantName(name);
    }
  };

  return (
    <div>
      <Layout>
        <h1>{title}</h1>
        <Tabs restaurants={restaurants} renderRestaurant={renderRestaurant} />
        {restaurants
          .filter((restaurant) => restaurant.name === restaurantName)
          .map(({ name, menu, reviews }) => (
            <Restaurant name={name} menu={menu} reviews={reviews} />
          ))}
      </Layout>
    </div>
  );
};
