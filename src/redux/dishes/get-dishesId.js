import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from ".";

export const getDishesId = createAsyncThunk(
  "dishes/getDishesId",
  async (dishId, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
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
