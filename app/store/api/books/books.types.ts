import type { TApiResponse } from "../api.common-api.types";
export enum EGenre {
  FICTION = "FICTION",
  NON_FICTION = "NON_FICTION",
  SCIENCE = "SCIENCE",
  HISTORY = "HISTORY",
  BIOGRAPHY = "BIOGRAPHY",
  FANTASY = "FANTASY",
}

export type TGenre = `${EGenre}`;
// Create Book Start
export type TCreateBookArgs = {
  title: string;
  author: string;
  genre: TGenre;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
};

export type TBook = TCreateBookArgs & {
  _id: string;
  createdAt?: string;
  updatedAt?: string;
};

export type TCreateBookRes = TApiResponse<TBook[]>;

// Create Book End

// Get Books Start
export type TGetBooksArgs = void;
export type TGetBooksRes = TApiResponse<TBook[]>;
// Get Books End

// get a single book
export type TGetBookByIdArgs = {
  id: string | undefined;
};

export type TGetBookByIdRes = TApiResponse<TBook>;

// update a book by id
export type TUpdateBookByIdArgs = {
  id: string | undefined;
  body: TCreateBookArgs;
};

export type TUpdateBookByIdRes = TApiResponse<TBook>;

// delete a book
export type TDeleteBookByIdArgs = {
  id: string | undefined;
};

export type TDeleteBookByIdRes = TApiResponse<null>;
