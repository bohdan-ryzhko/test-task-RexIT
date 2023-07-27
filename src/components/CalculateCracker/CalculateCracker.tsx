import { FC } from "react";
import { SliderRange } from "../SliderRange/SliderRange";

import CrackerImage1 from "../../images/cracker-calc/cracker-1.png";
import CrackerImage2 from "../../images/cracker-calc/cracker-2.png";
import CrackerImage3 from "../../images/cracker-calc/cracker-3.png";
import CrackerImage4 from "../../images/cracker-calc/cracker-4.png";

import sass from "./CalculateCracker.module.scss";

export const CalculateCracker: FC = () => {
  return (
    <div className={sass.calculateWrapper}>
        <h2 className={sass.calculateTitle}>cracker constructor</h2>
        <SliderRange
          type="beans"
          imagePath={CrackerImage1}
          currentColor="#00A651"
        />
        <SliderRange
          type="malt"
          imagePath={CrackerImage2}
          currentColor="#49743F"
        />
        <SliderRange
          type="wheat"
          imagePath={CrackerImage3}
          currentColor="#ABA000"
        />
        <SliderRange
          type="corn"
          imagePath={CrackerImage4}
          currentColor="#939393"
        />
      </div>
  )
}