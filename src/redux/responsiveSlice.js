import { createSlice } from '@reduxjs/toolkit'

const responsiveSlice = createSlice({
  name: 'responsive',
  initialState: {
    mobileView: false,
  },
  reducers: {
    changeMobile: (state, action) => {
      state.mobileView = action.payload
    },
  },
})

const responsiveReducer = responsiveSlice.reducer
export default responsiveReducer
export const { changeMobile } = responsiveSlice.actions
