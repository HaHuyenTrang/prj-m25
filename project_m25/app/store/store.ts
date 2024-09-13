import { configureStore } from "@reduxjs/toolkit";
import userStore from "./user/userStore";
import productStore from "./product/productStore";
import categoryStore from "./category/categoryStore";
import cartReducer from "./carts/cartReducer";

const store=configureStore({
    reducer:{
        
        userStore,
        productStore,
        categoryStore,
        cartReducer
        
    }
})
export type RootState = ReturnType<typeof store.getState>

export default store;