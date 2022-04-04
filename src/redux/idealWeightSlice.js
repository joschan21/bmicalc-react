import { createSlice } from "@reduxjs/toolkit";

const idealWeightSlice = createSlice({
    name:'weight',
    initialState: {
        idealWeight: 0
    },
    reducers: {
        setIdealWeight: (state, {payload}) => {
            state.idealWeight = payload.idealWeight
        }
    }
})

const idealWeightReducer = idealWeightSlice.reducer
export default idealWeightReducer
export const {setIdealWeight} = idealWeightSlice.actions