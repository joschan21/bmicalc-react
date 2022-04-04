import { createSlice } from '@reduxjs/toolkit'

const bmiSlice = createSlice({
  name: 'bmi',
  initialState: {
    bmi: null,
    health: null,
    range: null,
  },
  reducers: {
    setBmi: (state, { payload }) => {
      state.bmi = payload.bmi
      state.health = payload.health
      state.range = payload.range
    },
  },
})

const bmiReducer = bmiSlice.reducer
export default bmiReducer
export const { setBmi } = bmiSlice.actions
