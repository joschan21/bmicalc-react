import { createSlice, current } from '@reduxjs/toolkit'

const initialState = [
  { weight: '', option: 'KG' },
  { height: '', option: 'CM' },
  { age: '', option: 0 },
  { gender: 'male'},
  { activity: 'level_1'}
]

const formDataSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeInput: (state, action) => {
      state[action.payload.currentIndex][action.payload.inputName] = action.payload.value
    },
    changeOption: (state, action) => {
      state[action.payload.index][action.payload.type] = action.payload.name
    },
    clearInput: (state) => {
      state.map((question) => {
        question[Object.keys(question)[0]] = ''
      })
    },
  },
})

const formDataReducer = formDataSlice.reducer
export default formDataReducer
export const { changeInput, changeOption, clearInput } = formDataSlice.actions
