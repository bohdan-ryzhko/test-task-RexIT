import { createSlice } from "@reduxjs/toolkit";
import { OptionValue } from "../interfaces/option";

export type PackPrice = 81.5 | 50 | 28.5 | 0;

export interface PackState {
  pack: OptionValue;
  price: PackPrice;
}

const initialState: PackState = {
  pack: "",
  price: 0,
}

const chooseOptionSlice = createSlice({
  name: "choose-option",
  initialState,
  reducers: {
    changePack(state, action) {
      state.pack = action.payload.pack;
      state.price = action.payload.price;
    }
  }
});

export const { changePack } = chooseOptionSlice.actions;
export default chooseOptionSlice.reducer;
