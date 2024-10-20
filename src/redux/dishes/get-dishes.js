import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from ".";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    if (!result.name) {
      rejectWithValue("No dish");
      return;
    }

    return result;
  },
  {
    condition: (dishId, { getState }) => {
      return selectDishById(getState(), dishId);
    },
  }
);
