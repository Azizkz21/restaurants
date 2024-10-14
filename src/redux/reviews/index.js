import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../components/materials/normalized-mock";

const initialState = {
  entities: normalizedReviews.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviewsId: (state) => state.ids,
    selectReviewsById: (state, id) => state.entities[id],
  },
});

export const { selectReviewsId, selectReviewsById } = reviewsSlice.selectors;
