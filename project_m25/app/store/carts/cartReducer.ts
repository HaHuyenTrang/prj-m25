import { addToCart, getCartProduct, updatedCart, updateProductQuantity } from "@/services/cart.service";
import { createSlice } from "@reduxjs/toolkit";

const cartState: any = [];

const cartReducer = createSlice({
    name: "carts",
    initialState: {
        cart: cartState,
        totalPrice: 0,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCartProduct.fulfilled, (state, action) => {
            state.cart = action.payload
        })
        .addCase(addToCart.fulfilled, (state, action) => {
            state.cart.push(action.payload)
        })
        .addCase(updatedCart.fulfilled, (state, action) => {
            const update = state.cart.findIndex(
              (item: any) => item.id === action.payload.id
            );
            if (update !== -1) {
              state.cart[update].product.quantity = action.payload.product.quantity;
            }
          })
          .addCase(updateProductQuantity.fulfilled, (state, action) => {
            const { itemId, quantity } = action.payload;
            const productToUpdate = state.cart.find((item: any) => item.id === itemId);
            if (productToUpdate) {
              state.totalPrice -=
                productToUpdate.product.price * productToUpdate.product.quantity;
              productToUpdate.product.quantity = quantity; // Cập nhật số lượng trong state
              state.totalPrice += productToUpdate.product.price * quantity; // Cập nhật tổng số tiền
            }
          });
    }
})

export default cartReducer.reducer