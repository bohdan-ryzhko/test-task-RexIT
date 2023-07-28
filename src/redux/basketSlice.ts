import { createSlice } from "@reduxjs/toolkit";
import { CrackerCalcState } from "./crackerCalcSlice";
import { PackPrice } from "./chooseOptionSlice";
import { OptionValue } from "../interfaces/option";

import { nanoid } from 'nanoid';

export interface Pack extends CrackerCalcState {
  price: PackPrice;
  pack: OptionValue;
  id: string;
}

export interface BasketState {
  list: Pack[],
  total: number,
}

const initialState: BasketState = {
  list: [],
  total: 0,
}

const calcTotalPrice = (acc: number, pack: Pack): number => acc += pack.price;

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addPack(state, { payload }) {
      state.list.push({ ...payload, id: nanoid() });
      state.total = state.list.reduce(calcTotalPrice, 0)
    },
    removePack(state, action) {
      const removedIndex = state.list.findIndex(pack => pack.id === action.payload);
      state.list = state.list.filter((_, index) => index !== removedIndex);
      state.total = state.list.reduce(calcTotalPrice, 0)
    }
  },
});

export const { addPack, removePack } = basketSlice.actions;
export default basketSlice.reducer;
