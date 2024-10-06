import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

/*
1. Configure Store
2. createSlice
3. wrap the App with Provider
*/
