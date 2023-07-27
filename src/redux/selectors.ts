import { PackState } from './chooseOptionSlice';
import { CrackerCalcState } from './crackerCalcSlice';

interface CrackerState {
  cracker: CrackerCalcState;
  option: PackState,
}

export const selectBeans = (state: CrackerState) => state.cracker.beans;
export const selectMalt = (state: CrackerState) => state.cracker.malt;
export const selectWheat = (state: CrackerState) => state.cracker.wheat;
export const selectCorn = (state: CrackerState) => state.cracker.corn;

export const selectPack = (state: CrackerState) => state.option.pack;
