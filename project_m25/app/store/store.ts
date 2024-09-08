import { configureStore } from "@reduxjs/toolkit";
import userStore from "./user/userStore";
import productStore from "./product/productStore";
import categoryStore from "./category/categoryStore";

const store=configureStore({
    reducer:{
        
        userStore,
        productStore,
        categoryStore
        
    }
})
export type RootState = ReturnType<typeof store.getState>

export default store;