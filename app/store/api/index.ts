import {
  createApi,
  fetchBaseQuery,
  type FetchBaseQueryError,
  type FetchBaseQueryMeta,
  type QueryReturnValue,
} from "@reduxjs/toolkit/query/react";
import { tagTypes } from "./tagTypes";
import { siteConfig } from "~/config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: siteConfig.apiURL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
  tagTypes: tagTypes,
});
