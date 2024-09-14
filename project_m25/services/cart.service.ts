import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartProduct: any = createAsyncThunk(
    "carts/getCartProduct",
    async (id: number) => {
        const response = await axios.get(`http://localhost:8080/carts?idUser_like=${id}`);
        return response.data
    }
)

export const addToCart: any = createAsyncThunk(
    "carts/addToCart",
    async (data: any) => {
        const response = await axios.post("http://localhost:8080/carts", data);
        return response.data
    }
)

export const updatedCart: any = createAsyncThunk(
    "carts/updatedCart",
    async (cart: any) => {
      const response = await axios.patch(`http://localhost:8080/carts/${cart.id}`, cart);
      return response.data;
    }
  );

  export const deleteCart: any = createAsyncThunk(
    "carts/deleteCart",
    async (id: number) => {
      const response = await axios.delete(`http://localhost:8080/carts/${id}`);
      return id;
    }
)


  export const updateProductQuantity: any = createAsyncThunk(
    "cart/updateProductQuantity",
    async (
      {
        itemId,
        quantity,
        idUser,
      }: { itemId: number; quantity: number; idUser: string },
      thunkAPI
    ) => {
      try {
        // API call to update quantity
        const response = await axios.patch(`http://localhost:8080/carts/${itemId}`, {
          quantity,
          idUser, // Ensure you're sending user ID if needed
        });
        return { itemId, quantity }; // Return updated data
      } catch (error) {
        return thunkAPI.rejectWithValue("Failed to update quantity");
      }
    }
  );