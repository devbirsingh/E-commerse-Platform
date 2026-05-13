import { createSlice, isFulfilled } from "@reduxjs/toolkit";
import { addToCart, getCart, removeFromCart } from "./cartThunk";

export const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: [],
        loading: false,
        error: null,
    },
    reducers:{

    },
    extraReducers: (builder) =>{
        builder.addCase(getCart.fulfilled,(state,action)=>{
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(getCart.pending,(state)=>{
            state.loading = true;
            state.items=[];
        })
        .addCase(getCart.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error;
        })
        .addCase(addToCart.fulfilled,(state,action)=>{
            state.loading = false;
            state.items.push(action.payload);
        })
        .addCase(removeFromCart.fulfilled,(state,action)=>{
            state.loading = false;
            state.items.filter( item=> item._id != action.payload._id);
        })
    }
}
)

export default cartSlice.reducer;