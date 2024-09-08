import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product} from "../../interface/product";
//  lấy thông tin
export const getAllProduct:any = createAsyncThunk("products/getAllProduct",async()=>{
    let response = await axios.get("http://localhost:8080/products")
    return response.data
})

// Sản phẩm chi tiết
export const getProductById: any = createAsyncThunk(
    "products/getProductById",
    async (id: number) => {
        const response = await axios.get(`http://localhost:8080/products/${id}`)
        return response.data
    }
)
// xóa sản phẩm
export const deleteProduct: any = createAsyncThunk("products/deleteProduct", async(id:number)=>{
    let response = await axios.delete(`http://localhost:8080/products/${id}`)
    return response.data
})
// sửa thông tin sản phẩm
export const updateProduct:any = createAsyncThunk("products/updtaeProduct",async(product:any)=>{
    let response = await axios.put(`http://localhost:8080/products/${product.id}`,product)
    return response.data
})
// thêm sản phẩm
export const addProduct:any= createAsyncThunk("products/addProduct", async(data: any)=>{
    let response = await axios.post("http://localhost:8080/products", data)
    return response.data
})

export const addCarts: any = createAsyncThunk("products/addCart", async (id: number) => {
    const response = await axios.get(`http://localhost:8080/products/${id}`);
    return response.data
})

const productStore=createSlice({
    name:"productStore",
    initialState:{
        list:[],
        cart: [],
        productDetail: []
    },
    reducers:{
        setCart(state, action) {
            state.cart = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProduct.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.list=action.payload
        })
        .addCase(deleteProduct.fulfilled,(state,action)=>{
            state.list=state.list.filter((product:any)=>{
                return product.id!==action.payload.id
            })
        })
        .addCase(updateProduct.fulfilled,(state:any,action)=>{
            state.list = state.list.map((product: any) => product.id === action.payload.id ? action.payload : product)
        })
        .addCase(addProduct.fulfilled,(state: any,action)=>{
            state.cart.push(action.payload);
        })
        .addCase(addCarts.fulfilled, (state: any, action) => {
            const productId = action.payload;
            const productToAdd = state.list.find((product: Product) => product.id === productId);
            if (productToAdd) {
                // Thêm sản phẩm vào giỏ hàng
                state.cart.push(productToAdd);
            }
        })
        .addCase(getProductById.fulfilled, (state, action) => {
            console.log(action.payload)
            state.productDetail = action.payload
        })
    }
})

export const { setCart} = productStore.actions
export default productStore.reducer