import type { TCreateBorrowBookArgs } from "~/store/api/borrow/borrow.types";

export const initialFormValues: TCreateBorrowBookArgs = {
  book: "",
  quantity: 0,
  dueDate: new Date().toISOString(),
};
