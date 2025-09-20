import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlices.js";

export const store = configureStore({
    reducer:{
        cart:CartSlice
    }
})