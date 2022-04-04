import { createSlice } from '@reduxjs/toolkit'

const bmiSlice = createSlice({
  name: 'calories',
  initialState: {
    bmr: 0,
    goals: {
      'maintain weight': 2169,
      'Mild weight loss': { calory: 1919 },
      'Weight loss': { calory: 1669 },
      'Extreme weight loss': { calory: 1169 },
      'Mild weight gain': { calory: 2419 },
      'Weight gain': { calory: 2669 },
      'Extreme weight gain': { calory: 3169 },
    },
  },
  reducers: {
    setCalories: (state, { payload }) => {
      state.bmr = payload.bmr
      state.goals = payload.goals
    },
  },
})

const caloriesReducer = bmiSlice.reducer
export default caloriesReducer
export const { setCalories } = bmiSlice.actions
