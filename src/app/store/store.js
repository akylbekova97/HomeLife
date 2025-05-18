import { configureStore } from "@reduxjs/toolkit";
import { screenSlice } from "./screen.slice";
import { $api } from "../../services/api";

export const store = configureStore({
  reducer: {
    [screenSlice.name]: screenSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat($api.middleware),
  devTools: true,
});
