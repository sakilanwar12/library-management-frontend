import type { TApiResponse } from "../api.common-api.types";

// Create Book Start
export type TCreateBookArgs = {
  title: string;
  author: string;
  genre: string;
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
