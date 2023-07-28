import { useSelector } from "react-redux";
import { selectBasket } from "../redux";

export const useBasket = () => ({
  basket: useSelector(selectBasket),
});
