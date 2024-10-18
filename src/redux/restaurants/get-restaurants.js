import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsId } from ".";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async ({ onError }, { dispatch, getState, rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/restaurants");
    const result = await response.json();
    if (!result.length) {
      rejectWithValue("no data");
      onError();
      return;
    }

    
    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectRestaurantsId(getState()).length === 0;
    },
  }
);
