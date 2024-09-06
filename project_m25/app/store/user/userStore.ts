import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interface/user";
import axios from "axios";

const userState: User[] = [];

// API lấy user
export const getAllUser: any = createAsyncThunk(
    "user/getAllUser",
    async () => {
        const response = await axios.get("http://localhost:8080/user");
        return response.data
    }
)


// API thêm user 
export const addUser: any = createAsyncThunk(
    "user/addUser",
    async (data: any) => {
        const response = await axios.post("http://localhost:8080/user", data);
        return response.data;
    }
)

// tìm kiếm user
export const searchUser:any=createAsyncThunk("user/searchUser", async(search:string)=>{
    const response = await axios.get(`http://localhost:8080/user?name_like=${search}`);
    return response.data
})

// API cập nhật trạng thái user
export const statusUser: any=createAsyncThunk("user/statusUser", async(data:any)=>{
    const response= await axios.patch(` http://localhost:8080/user/${data.id}`,data)
    return response.data
})

const userReducer = createSlice({
    name: "user",
    initialState: {
        user: userState
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        .addCase(addUser.fulfilled, (state, action) => {
            state.user.push(action.payload)
        })
        .addCase(statusUser.fulfilled,(state, action: PayloadAction<{ id: number, status: number }>)=>{
            const findUser = state.user.findIndex((user) => user.id === action.payload.id);
            if(findUser !== -1){
                state.user[findUser].status = action.payload.status
            }
        })
    }
})

export default userReducer.reducer