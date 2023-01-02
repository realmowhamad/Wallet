import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Products/ProductSlice";



export const store = configureStore({
    reducer: {
        products: ProductReducer,

    }
})