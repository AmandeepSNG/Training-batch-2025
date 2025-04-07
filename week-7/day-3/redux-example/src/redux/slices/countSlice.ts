import { createSlice } from "@reduxjs/toolkit"


const initialState = 0

export const counterSlice = createSlice({
  name: 'counter-slice',
  initialState: initialState,
  reducers: {
    updateCount: (state, action) => {
      return action.payload
    }
  }
})

export const { updateCount } = counterSlice.actions
export default counterSlice.reducer