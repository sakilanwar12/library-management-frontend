import type { TApiResponse } from "../api.common-api.types";

// borrow a book
export type TCreateBorrowBookArgs = {
  book: string;
  quantity: number;
  dueDate: string;
};

export type TBorrowBook = TCreateBorrowBookArgs & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export type TCreateBorrowBookRes = TApiResponse<TBorrowBook[]>;

// borrow book end

export type TGetBorrowBooksArgs = void;
export type TGetBorrowBook = {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
};
export type TGetBorrowBooksRes = TApiResponse<TGetBorrowBook[]>;
