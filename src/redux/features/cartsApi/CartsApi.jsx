import { baseApi } from "../../api/baseApi";
const CartsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCarts: builder.mutation({
      query: (addCarts) => ({
        url: "/create-carts",
        method: "POST",
        body: addCarts,
      }),
    }),
    getCarts: builder.query({
      query: () => ({
        url: "/carts",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddCartsMutation, useGetCartsQuery } = CartsApi;
