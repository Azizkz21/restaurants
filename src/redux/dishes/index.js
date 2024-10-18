import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { FULFILLED, IDLE, PENDING, REJECTED } from "../../constats/constats";
import { getDishes } from "./get-dishes";
import { getDishesId } from "./get-dishesId";

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
    selectDishRequestStatus: (state) => state.requestStatus,
    selectDishRequestStatusId: (state) => state.requestStatusId,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getDishes.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
      .addCase(getDishesId.pending, (state) => {
        state.requestStatusId = PENDING;
      })
      .addCase(getDishesId.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
        state.requestStatusId = FULFILLED;
      })
      .addCase(getDishesId.rejected, (state) => {
        state.requestStatusId = REJECTED;
      }),
});

export const {
  selectDishId,
  selectDishById,
  selectDishRequestStatus,
  selectDishRequestStatusId,
} = dishSlice.selectors;
