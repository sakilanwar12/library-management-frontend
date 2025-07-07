import type { TApiResponse } from "../api.common-api.types";

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
