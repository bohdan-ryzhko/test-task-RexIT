import { useSelector } from "react-redux";
import { selectBeans, selectCorn, selectMalt, selectWheat } from "../redux";

export const useCrackerState = () => ({
  beans: useSelector(selectBeans),
  corn: useSelector(selectCorn),
  malt: useSelector(selectMalt),
  wheat: useSelector(selectWheat),
});
