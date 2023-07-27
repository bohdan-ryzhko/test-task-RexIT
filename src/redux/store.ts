import { configureStore } from "@reduxjs/toolkit";
import crackerCalcReducer from "./crackerCalcSlice";
import chooseOptionReducer from "./chooseOptionSlice";
import basketReducer from "./basketSlice";

export const store = configureStore({
  reducer: {
    cracker: crackerCalcReducer,
    option: chooseOptionReducer,
    basket: basketReducer,
  },
});
