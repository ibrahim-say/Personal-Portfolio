"use client"

import { createSlice } from '@reduxjs/toolkit'
let initialState={}
if(typeof window !== "undefined"){
   initialState = {
    width: window.innerWidth,
  }
  
}

export const windowWidth = createSlice({
  name: 'windowWidth',
  initialState,
  reducers: {
    changeWindow: (state,action) => {
      state.width = action.payload.w
    }
  }
})

export const { changeWindow } = windowWidth.actions

export default windowWidth.reducer