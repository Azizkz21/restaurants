import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { FULFILLED, IDLE, PENDING, REJECTED } from "../../../constats/constats";
import { getReviews } from "./get-reviews";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState({ requestStatus: IDLE }),
  selectors: {
    selectReviewsId: (state) => state.ids,
    selectReviewsById: (state, id) => state.entities[id],
    selectReviewsRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getReviews.rejected, (state) => {
        state.requestStatus = REJECTED;
      }),
});

export const {
  selectReviewsId,
  selectReviewsById,
  selectReviewsRequestStatus,
} = reviewsSlice.selectors;
