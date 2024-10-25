import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({ query: () => "/restaurants" }),
    getRestaurantById: builder.query({ query: (id) => `/restaurant/${id}` }),
    getDishes: builder.query({ query: (id) => `/dishes?restaurantId=${id}` }),
    getDishById: builder.query({ query: (id) => `/dish/${id}` }),
    getReviewsById: builder.query({
      query: (id) => `/reviews?restaurantId=${id}`,
      providesTags: (id) => [{ type: "Reviews", id }],
    }),
    getUsers: builder.query({ query: () => `/users/` }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        method: "POST",
        body: review,
        url: `/review/${restaurantId}`,
      }),
      invalidatesTags: ({ restaurantId }) => [
        { type: "Reviews", id: restaurantId },
      ],
    }),
    editReview: builder.mutation({
      query: ({ reviewId, review }) => ({
        method: "PATCH",
        body: review,
        url: `/review/${reviewId}`,
      }),
      invalidatesTags: ({ reviewId }) => [{ type: "Reviews", id: reviewId }],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useAddReviewMutation,
  useEditReviewMutation,
  useGetReviewsByIdQuery,
  useGetUsersQuery,
  useGetDishesQuery,
  useGetDishByIdQuery,
} = apiSlice;
