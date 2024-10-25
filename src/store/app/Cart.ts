import { createSlice } from '@reduxjs/toolkit'

export interface CartState {
  items: any
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart(state, action){
      const {productid, quantity} = action.payload;
      const indexProductId = (state.items).findIndex((item: { productid: any; }) => item.productid === productid);
      if (indexProductId >= 0 ) {
        state.items[indexProductId].quantity += quantity ;
      }else{
        state.items.push({productid, quantity})
      }
      
    }
  }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer