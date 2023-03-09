import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import filter from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import { type } from "os";
export const store = configureStore({
  reducer: {
    filter,
    cart
  }
});
export type RootState = ReturnType<typeof store.getState>;
