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
    selectReviewsIds: (state) => state.ids,
    selectReviewsByIds: (state, id) => state.entities[id],
  },
});

export const { selectReviewsIds, selectReviewsByIds } = reviewsSlice.selectors;
