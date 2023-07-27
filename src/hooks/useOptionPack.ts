import { useSelector } from "react-redux";
import { selectPack } from "../redux";

export const useOptionPack = () => ({
  pack: useSelector(selectPack),
});
