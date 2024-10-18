import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewsId } from ".";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
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
    condition: (_, { getState }) => {
      return selectReviewsId(getState()).length === 0;
    },
  }
);
