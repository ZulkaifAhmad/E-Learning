import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cart/cartSlice"

export const store = configureStore({
  reducer: {
    cart : cartReducer
  },
})


 store.subscribe(()=>{
    const state = store.getState();
    console.log("Current state:", state);
 })

