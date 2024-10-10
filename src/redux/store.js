import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./restaurants";
import { dishSlice } from "./dish";
import { reviewsSlice } from "./reviews";
import { usersSlice } from "./users";
import { cartSlice } from "./ui/cart";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});
