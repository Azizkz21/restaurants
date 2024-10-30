"use client";

import { RestaurantsPage } from "../../../components/Page/restaurantsPage/RestaurantsPage";
function Restaurant({ children }) {
  return <RestaurantsPage>{children}</RestaurantsPage>;
}

export default Restaurant;
