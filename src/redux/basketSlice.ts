import { createSlice } from "@reduxjs/toolkit";
import { CrackerCalcState } from "./crackerCalcSlice";
import { OptionValue } from "../interfaces/option";

import { nanoid } from 'nanoid';

interface Pack extends CrackerCalcState {
  pack: OptionValue,
  id: string;
}

interface BasketState {
  list: Pack[],
}

const initialState: BasketState = {
  list: [],
}

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addPack(state, { payload }) {
      state.list.push({ ...payload, id: nanoid() });
    },
    removePack(state, action) {
      const removedIndex = state.list.findIndex(pack => pack.id === action.payload);
      state.list.slice(removedIndex, 1);
    }
  },
});

export const { addPack } = basketSlice.actions;
export default basketSlice.reducer;
