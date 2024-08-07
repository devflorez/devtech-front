
import { Middleware } from "@reduxjs/toolkit";
import { TRootState } from "./store";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  const state: TRootState = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart));
  return result;
};

export default localStorageMiddleware;
