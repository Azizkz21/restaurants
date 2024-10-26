import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./ui/cart";
import { requestSlice } from "./ui/request";
import { restaurantsSlice } from "./entities/restaurants";
import { reviewsSlice } from "./entities/reviews";
import { usersSlice } from "./entities/users";
import { dishSlice } from "./entities/dishes";
import { apiSlice } from "./services/api/api";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
