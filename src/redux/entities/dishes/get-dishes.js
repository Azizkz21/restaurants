import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from ".";
import { selectRestaurantsById } from "../restaurants";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    if (!result.length) {
      rejectWithValue("No dish");
      return;
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const restaurant = selectRestaurantsById(getState(), restaurantId);
      const { menu } = restaurant;

      for (let menuId of menu) {
        if (!selectDishById(getState(), menuId)) {
          return true;
        }
        return false;
      }
    },
  }
);
