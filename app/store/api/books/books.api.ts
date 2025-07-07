import { apiSlice } from "..";

export const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation({
      query: (data) => ({
        url: "/api/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const { useCreateBookMutation } = bookApi;
