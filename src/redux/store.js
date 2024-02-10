import { configureStore } from "@reduxjs/toolkit";
import autenticacionReducer from "./autenticacionSlice";
import inventarioReducer from "./inventarioSlice";
export const store = configureStore({
  reducer: {
    seguridad: autenticacionReducer,
    inventario: inventarioReducer
  },
});