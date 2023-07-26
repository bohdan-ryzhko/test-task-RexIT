import { CrackerCalcState } from './crackerCalcSlice';

interface CrackerState {
  cracker: CrackerCalcState;
}

export const selectBeans = (state: CrackerState) => state.cracker.beans;
export const selectMalt = (state: CrackerState) => state.cracker.malt;
export const selectWheat = (state: CrackerState) => state.cracker.wheat;
export const selectCorn = (state: CrackerState) => state.cracker.corn;
