import { configureStore } from "@reduxjs/toolkit";
import crackerCalcReducer from "./crackerCalcSlice";

export const store = configureStore({
  reducer: {
    cracker: crackerCalcReducer
  },
});
