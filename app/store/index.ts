import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api";
const rootReducer = combineSlices(apiSlice);
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
