import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import countriesReducer from "./countriesSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    country: countriesReducer
  },
});
export default store;
