import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { FULFILLED, IDLE, PENDING, REJECTED } from "../../constats/constats";
import { getDishes } from "./get-dishes";
import { getDish } from "./get-dish";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dishMenu",
  initialState: entityAdapter.getInitialState({
    requestStatus: IDLE,
    requestStatusId: IDLE,
  }),
  selectors: {
    selectDishId: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
    selectDishRequestStatus: (state) => state.requestStatusDish,
    selectDishRequestStatusId: (state) => state.requestStatusDishId,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.requestStatusDish = PENDING;
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
        state.requestStatusDish = FULFILLED;
      })
      .addCase(getDishes.rejected, (state) => {
        state.requestStatusDish = REJECTED;
      })
      .addCase(getDish.pending, (state) => {
        state.requestStatusDishId = PENDING;
      })
      .addCase(getDish.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
        state.requestStatusDishId = FULFILLED;
      })
      .addCase(getDish.rejected, (state) => {
        state.requestStatusDishId = REJECTED;
      }),
});

export const {
  selectDishId,
  selectDishById,
  selectDishRequestStatus,
  selectDishRequestStatusId,
} = dishSlice.selectors;
