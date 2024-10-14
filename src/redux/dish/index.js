import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../components/materials/normalized-mock";

const initialState = {
  entities: normalizedDishes.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

export const dishSlice = createSlice({
  name: "dishMenu",
  initialState,
  selectors: {
    selectDishId: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
});

export const { selectDishId, selectDishById } = dishSlice.selectors;
