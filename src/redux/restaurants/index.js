import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../components/materials/normalized-mock";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  selectors: {
    selectRestaurantsId: (state) => state.ids,
    selectRestaurantsById: (state, id) => state.entities[id],
  },
});

export const { selectRestaurantsId, selectRestaurantsById } =
  restaurantsSlice.selectors;
