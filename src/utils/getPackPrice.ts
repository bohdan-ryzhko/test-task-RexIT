import { OptionValue } from "../interfaces/option";
import { PackPrice } from "../redux/chooseOptionSlice";

export const getPackPrice = (value: OptionValue | undefined): PackPrice => {
  switch (value) {
    case "small":
      return 28.5;
    case "medium":
      return 50;
    case "large":
      return 81.5;
    default:
      return 0;
  }
}
