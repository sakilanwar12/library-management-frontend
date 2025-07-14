import { apiSlice } from "..";
import type {
  TCreateBorrowBookArgs,
  TCreateBorrowBookRes,
  TGetBorrowBooksArgs,
  TGetBorrowBooksRes,
} from "./borrow.types";

export const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBorrowBook: builder.mutation<
      TCreateBorrowBookRes,
      TCreateBorrowBookArgs
    >({
      query: (data) => ({
        url: "/api/borrow",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["BorrowBooks"],
    }),
    getBorrowBooks: builder.query<TGetBorrowBooksRes, TGetBorrowBooksArgs>({
      query: () => "/api/borrow",
      providesTags: ["Books"],
    }),
  }),
});

export const { useCreateBorrowBookMutation, useGetBorrowBooksQuery } = bookApi;
