import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Category } from "../../interface/category";
// import Category from "../../pages/admin/Category";

const category: Category[] = []
// lấy category
export const getCategory:any=createAsyncThunk("category/getCategory", async()=>{
    const response = await axios.get("http://localhost:8080/category");
    return response.data
})

// thêm category
export const addCategory:any = createAsyncThunk("category/addCategory",
    async (category)=>{
        const response = await axios.post("http://localhost:8080/category", category)
        return response.data
    }
)

// xóa categor
    export const deleteCategory:any = createAsyncThunk("category/deleteCategory", async(idCategory)=>{
        const response = await axios.delete(`http://localhost:8080/category/${idCategory}`)
        return idCategory
    })

const categoryReducer = createSlice({
    name:"category",
    initialState:{
        category: category
    },
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getCategory.fulfilled,(state,action)=>{
            state.category=action.payload
        })
        .addCase(addCategory.fulfilled, (state,action)=>{
            state.category.push(action.payload)
        })
        .addCase(deleteCategory.fulfilled,(state, action)=>{
            state.category=state.category.filter((category:any)=>{
                return category.id!==action.payload.id
            })
        })

    }
})

export default categoryReducer.reducer