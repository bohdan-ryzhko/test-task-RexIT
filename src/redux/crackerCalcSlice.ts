import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CrackerCalcState {
  beans: number;
  malt: number;
  wheat: number;
  corn: number;
}

interface ChangeItemAction {
  type: string;
  payload: {
    property: keyof CrackerCalcState;
    value: number;
  };
}

const initialState: CrackerCalcState = {
  beans: 30,
  malt: 30,
  wheat: 30,
  corn: 10,
}

const crackerCalcSlice = createSlice({
  name: "cracker-slice",
  initialState,
  reducers: {
    changeItem(state, action: PayloadAction<ChangeItemAction["payload"]>) {
      const { property, value } = action.payload;
      state[property] = value;
    }
  },
});

export const { changeItem } = crackerCalcSlice.actions;
export default crackerCalcSlice.reducer;