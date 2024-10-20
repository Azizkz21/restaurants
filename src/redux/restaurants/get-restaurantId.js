import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsById } from ".";

export const getRestaurant = createAsyncThunk(
  "restaurants/getRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`
    );
    const result = await response.json();
    if (!result.name) {
      rejectWithValue("No restaurant");
      return;
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      return selectRestaurantsById(getState(), restaurantId);
    },
  }
);
