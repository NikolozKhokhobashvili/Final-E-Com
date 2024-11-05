import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  data:any
}

const initialState: CounterState = {
  data: [],
}

export const dataSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    setData:(state,action)=>{
      
      state.data = action.payload;
      console.log(state.data);
      
      
    }
  },
})

// Action creators are generated for each case reducer function
export const {setData} = dataSlice.actions

export default dataSlice.reducer