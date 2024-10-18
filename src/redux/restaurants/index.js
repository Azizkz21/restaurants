import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { FULFILLED, IDLE, PENDING, REJECTED } from "../../constats/constats";
import { getRestaurants } from "./get-restaurants";
import { getRestaurantId } from "./get-restaurantId";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState({
    requestStatus: IDLE,
    requestStatusId: IDLE,
  }),
  selectors: {
    selectRestaurantsId: (state) => state.ids,
    selectRestaurantsById: (state, id) => state.entities[id],
    selectRestaurantsRequestStatus: (state) => state.requestStatus,
    selectRestaurantsRequestStatusId: (state) => state.requestStatusId,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
      .addCase(getRestaurantId.pending, (state) => {
        state.requestStatusId = PENDING;
      })
      .addCase(getRestaurantId.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
        state.requestStatusId = FULFILLED;
      })
      .addCase(getRestaurantId.rejected, (state) => {
        state.requestStatusId = REJECTED;
      }),
});

export const {
  selectRestaurantsId,
  selectRestaurantsById,
  selectRestaurantsRequestStatus,
  selectRestaurantsRequestStatusId,
} = restaurantsSlice.selectors;
