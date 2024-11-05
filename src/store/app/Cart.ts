import { createSlice } from '@reduxjs/toolkit'

export interface CartState {
  items: any
  statusTab: boolean
}

const initialState: CartState = {
  items: [],
  statusTab:false
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
    },
    changeQuantity(state, action ){
      const {productid, quantity} = action.payload;
      const indexProductId = (state.items).findIndex((item: { productid: any; }) => item.productid === productid);
      if (quantity>0) {
        state.items[indexProductId].quantity = quantity;
      } else{
        delete state.items[indexProductId];
      }
    },
    toggleTab(state) {
      if (state.statusTab === false ) {
        state.statusTab = true ;
      } else{
        state.statusTab = false
      }
    }
  }
})

export const {addToCart, changeQuantity, toggleTab} = cartSlice.actions;

export default cartSlice.reducer