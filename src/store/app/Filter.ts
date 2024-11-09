import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface CounterState {
  value: { name: string; age: number }[];
}


const initialState: CounterState = { 
  value: [],
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addFormData: (state, action: PayloadAction<{ name: string; age: number }>) => {
      state.value.push(action.payload); 
    },
  },
});


export const { addFormData } = counterSlice.actions;


export default counterSlice.reducer;
