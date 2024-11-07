import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  productid: number;
  quantity: number;
  name: string;
  price: string;
  src: string
}

export interface CartState {
  items: CartItem[];
  statusTab: boolean;
}

const initialState: CartState = {
  items: [],
  statusTab: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productid, quantity, name, price, src } = action.payload;

      console.log("Current items:", JSON.parse(JSON.stringify(state.items)));

      const indexProductId = state.items.findIndex(
        (item: { productid: number }) => item.productid === productid
      );

      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productid, quantity, name, price, src });
      }
      

      console.log("Updated items:", JSON.parse(JSON.stringify(state.items)));
    },
    changeQuantity(state, action) {
      const { productid, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item: { productid: any }) => item.productid === productid
      );
      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        state.items.splice(indexProductId, 1);
      }
    },
    toggleTab(state) {
      if (state.statusTab === false) {
        state.statusTab = true;
      } else {
        state.statusTab = false;
      }
    },
  },
});

export const { addToCart, changeQuantity, toggleTab } = cartSlice.actions;

export default cartSlice.reducer;
