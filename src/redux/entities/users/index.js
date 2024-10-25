import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { FULFILLED, IDLE, PENDING, REJECTED } from "../../../constats/constats";
import { getUsers } from "./get-users";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState({ requestStatus: IDLE }),
  selectors: {
    selectUsersId: (state) => state.ids,
    selectUsersById: (state, id) => state.entities[id],
    selectUsersRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getUsers.rejected, (state) => {
        state.requestStatus = REJECTED;
      }),
});

export const { selectUsersId, selectUsersById, selectUsersRequestStatus } =
  usersSlice.selectors;
