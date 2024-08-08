"use client"
import { Middleware } from "@reduxjs/toolkit";
import { TRootState } from "./store";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  const state: TRootState = store.getState();
  if (!state.cart) return result;
  if (!localStorage) return result;
  localStorage.setItem("cart", JSON.stringify(state.cart));
  return result;
};

export default localStorageMiddleware;
