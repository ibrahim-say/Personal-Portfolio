import { configureStore } from "@reduxjs/toolkit";
import windowWidth from "./featuers/modalSlice"


export const store = configureStore({
  reducer: {
    windowWidth: windowWidth,
  },
});


 