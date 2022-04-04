import { createSlice } from '@reduxjs/toolkit'

const navbarSlice = createSlice({
  name: 'nav',
  initialState: [
    { name: 'Body Mass Index', href: '/', current: true },
    { name: 'Daily Calories', href: '/daily-calories', current: false },
    { name: 'Ideal Weight', href: '/ideal-weight', current: false },
  ],
  reducers: {
    changeNav: (state, action) => {
      for(let i = 0; i < state.length; i++) {
          state[i].current = false
      }

      state[action.payload.index].current = true
    },
  },
})

const navbarReducer = navbarSlice.reducer
export default navbarReducer
export const {changeNav} = navbarSlice.actions
