import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: 'error',
    initialState: {
        apiError: false
    },
    reducers: {
        throwErr: (state) => {
            state.apiError = true
        },
        clearErr: (state) => {
            state.apiError = false
        }
    }
})

const errorReducer = errorSlice.reducer
export default errorReducer
export const {throwErr, clearErr} = errorSlice.actions
