import { FC, useState } from "react";
import Select from 'react-select';
import { Option } from "../../interfaces";
import { AppDispatch } from "../../types";
import { useDispatch } from "react-redux";
import { changePack } from "../../redux";
import { getPackPrice } from "../../utils";

const options: Option[] = [
  { value: "small", label: "Small Pack" },
  { value: "medium", label: "Medium Pack" },
  { value: "large", label: "Large Pack" },
];

export const SelectPack: FC = () => {
  const [selectedOption] = useState<Option | null>({ value: "small", label: "Choose your pack" });

  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <Select
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            padding: "16px 32px",
            border: "2px solid #FF4200",
            borderRadius: 90,
            textTransform: "uppercase",
            cursor: "pointer",
            backgroundColor: "transparent",
            maxWidth: 300,
            boxShadow: "none",
            "&:hover": {
              borderColor: "#FF4200",
            },
          }),
          indicatorSeparator: () => ({
            display: "none",
          }),
          dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            color: "#FF4200",
            "&:hover": {
              color: "#FF4200",
            },
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            color: "#FF4200",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "#fff",
            border: "2px solid #FF4200",
            borderRadius: 40,
            padding: "10px 50px",
            maxWidth: 300,
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            color: state.isSelected ? "#fff" : "#333",
            backgroundColor: state.isSelected ? "#cecece9c" : "transparent",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#FF4200",
              color: "#fff",
            },
          }),
        }}
        defaultValue={selectedOption}
        onChange={(selectedPack) => {
          const price = getPackPrice(selectedPack?.value);
          const pack = selectedPack?.value;

          dispatch(changePack({ price, pack }));
        }}
        options={options}
      />
    </>
  )
}
