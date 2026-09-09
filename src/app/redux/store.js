import { configureStore } from "@reduxjs/toolkit";
import windowWidth from "./modalSlice"


export const store = configureStore({
  reducer: {
    windowWidth: windowWidth,
  },
});


 