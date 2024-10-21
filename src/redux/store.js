import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./restaurants";
import { dishSlice } from "./dishes";
import { reviewsSlice } from "./reviews";
import { usersSlice } from "./users";
import { cartSlice } from "./ui/cart";
import { requestSlice } from "./ui/request";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
});
