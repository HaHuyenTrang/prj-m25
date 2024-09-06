import { configureStore } from "@reduxjs/toolkit";
import userStore from "./user/userStore";

const store=configureStore({
    reducer:{
        
        userStore
        
    }
})
export type RootState = ReturnType<typeof store.getState>

export default store;