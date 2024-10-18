import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsersId } from ".";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/users/`);
    const result = await response.json();
    if (!result.length) {
      rejectWithValue("No Users");
      return;
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectUsersId(getState()).length === 0;
    },
  }
);
