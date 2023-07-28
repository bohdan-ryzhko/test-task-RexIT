import { useSelector } from "react-redux";
import { selectOption } from "../redux";

export const useOptionPack = () => ({
  option: useSelector(selectOption),
});
