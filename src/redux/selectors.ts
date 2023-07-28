import { BasketState } from './basketSlice';
import { PackState } from './chooseOptionSlice';
import { CrackerCalcState } from './crackerCalcSlice';

interface State {
  cracker: CrackerCalcState;
  option: PackState,
  basket: BasketState
}

export const selectBeans = (state: State) => state.cracker.beans;
export const selectMalt = (state: State) => state.cracker.malt;
export const selectWheat = (state: State) => state.cracker.wheat;
export const selectCorn = (state: State) => state.cracker.corn;

export const selectOption = (state: State) => state.option;

export const selectBasket = (state: State) => state.basket;
