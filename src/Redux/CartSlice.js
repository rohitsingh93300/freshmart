import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        //actions
        setCart:(state, action) => {
            state.cart = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setCart } = cartSlice.actions

export default cartSlice.reducer