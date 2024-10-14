import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../components/materials/normalized-mock";

const initialState = {
  entities: normalizedUsers.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  selectors: {
    selectUsersId: (state) => state.ids,
    selectUsersById: (state, id) => state.entities[id],
  },
});

export const { selectUsersId, selectUsersById } = usersSlice.selectors;
