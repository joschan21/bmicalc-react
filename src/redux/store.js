import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import responsiveReducer from "./responsiveSlice";
import formDataReducer from "./formDataSlice";
import bmiReducer from "./bmiSlice";
import navbarReducer from "./NavbarSlice";
import caloriesReducer from "./dailyCalorieSlice";
import idealWeightReducer from "./idealWeightSlice";
import errorReducer from "./errorSlice";

const rootReducer = combineReducers({
    responsive: responsiveReducer,
    form: formDataReducer,
    bmi: bmiReducer,
    calories: caloriesReducer,
    weight: idealWeightReducer,
    nav: navbarReducer,
    error: errorReducer
})

const store = configureStore({reducer: rootReducer})
export default store