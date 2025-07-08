import { apiSlice } from "..";
import type {
  TCreateBookArgs,
  TCreateBookRes,
  TGetBooksArgs,
  TGetBooksRes,
} from "./books.types";

export const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation<TCreateBookRes, TCreateBookArgs>({
      query: (data) => ({
        url: "/api/books",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["getAllAddOn", "getAllEvent", "getAnEvent"],
    }),
    getBooks: builder.query<TGetBooksRes, TGetBooksArgs>({
      query: () => "/api/books",
      providesTags: ["Books"],
    }),
  }),
});

export const { useCreateBookMutation, useGetBooksQuery } = bookApi;
