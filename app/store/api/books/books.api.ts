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
    getBooks: builder.query({
      query: () => "/api/books",
      providesTags: ["Books"],
    }),
  }),
});

export const { useCreateBookMutation, useGetBooksQuery } = bookApi;
