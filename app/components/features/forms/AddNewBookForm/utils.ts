import type { TGenre } from "~/store/api/books/books.types";
import type { TFormType } from "./types";
type TGenreOptions = {
  label: string;
  value: TGenre;
};
export const genreOptions: TGenreOptions[] = [
  { label: "Fiction", value: "FICTION" },
  { label: "Non Fiction", value: "NON_FICTION" },
  { label: "Science", value: "SCIENCE" },
  { label: "History", value: "HISTORY" },
  { label: "Biography", value: "BIOGRAPHY" },
  { label: "Fantasy", value: "FANTASY" },
];
export const initialFormValues: TFormType = {
  title: "",
  author: "",
  genre: "BIOGRAPHY",
  isbn: "",
  description: "",
  copies: 0,
  available: false,
};
