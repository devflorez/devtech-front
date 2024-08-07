import cartReducer from "./cart/slice-cart";
import { configureStore } from "@reduxjs/toolkit";
import localStorageMiddleware from "./local-storage-middleware";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;
