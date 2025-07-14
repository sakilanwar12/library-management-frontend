import { apiSlice } from "..";
import type {
  TCreateBookArgs,
  TCreateBookRes,
  TDeleteBookByIdArgs,
  TDeleteBookByIdRes,
  TGetBookByIdArgs,
  TGetBookByIdRes,
  TGetBooksArgs,
  TGetBooksRes,
  TUpdateBookByIdArgs,
  TUpdateBookByIdRes,
} from "./books.types";

export const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation<TCreateBookRes, TCreateBookArgs>({
      query: (data) => ({
        url: "/api/books",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Books"],
    }),
    getBooks: builder.query<TGetBooksRes, TGetBooksArgs>({
      query: () => "/api/books",
      providesTags: ["Books"],
    }),
    getBookById: builder.query<TGetBookByIdRes, TGetBookByIdArgs>({
      query: ({ id }) => {
        return `/api/books/${id}`;
      },
      providesTags: ["Books"],
    }),
    updateABookById: builder.mutation<TUpdateBookByIdRes, TUpdateBookByIdArgs>({
      query: ({ id, body }) => {
        return {
          url: `/api/books/${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["Books"],
    }),
    deleteBookById: builder.mutation<TDeleteBookByIdRes, TDeleteBookByIdArgs>({
      query: ({ id }) => {
        return {
          url: `/api/books/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useCreateBookMutation,
  useGetBooksQuery,
  useGetBookByIdQuery,
  useUpdateABookByIdMutation,
  useDeleteBookByIdMutation,
} = bookApi;
