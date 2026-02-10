import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js"

const store = configureStore({
    reducer : {
        cart : cartSlice
    }
})

store.subscribe(()=> {
    const state = store.getState()
    console.log(state)
})

export default store;
