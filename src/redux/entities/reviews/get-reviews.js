import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsById } from "../restaurants";
import { selectReviewsById } from ".";

export const getReviews = createAsyncThunk(
  "reviews/getReviewsById",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("No reviews");
      return;
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const restaurant = selectRestaurantsById(getState(), restaurantId);
      const { menu } = restaurant;

      for (let menuId of menu) {
        if (!selectReviewsById(getState(), menuId)) {
          return true;
        }
        return false;
      }
    },
  }
);
