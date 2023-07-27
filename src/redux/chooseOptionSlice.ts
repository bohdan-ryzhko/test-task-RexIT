import { createSlice } from "@reduxjs/toolkit";
import { OptionValue } from "../interfaces/option";

export interface PackState {
  pack: OptionValue;
}

const initialState: PackState = {
  pack: "",
}

const chooseOptionSlice = createSlice({
  name: "choose-option",
  initialState,
  reducers: {
    changePack(state, action) {
      state.pack = action.payload;
    }
  }
});

export const { changePack } = chooseOptionSlice.actions;
export default chooseOptionSlice.reducer;
