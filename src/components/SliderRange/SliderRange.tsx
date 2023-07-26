import { FC, useEffect } from "react";
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { CrackerCalcState, changeItem } from "../../redux/crackerCalcSlice";
import { useCrackerState } from "../../hooks/useCrackerState";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types";

type CurrentColor = "#00A651" | "#49743F" | "#ABA000" | "#939393";

interface SliderRangeProps {
  currentColor: CurrentColor;
  imagePath: string;
  type: keyof CrackerCalcState;
}

const dotStyles = {
  width: "36px",
  height: "36px",
  top: "50%",
  transform: "translateY(-40%)",
  opacity: 1,
  boxShadow: "none",
}

const calculateAutoCorn = (beans: number, malt: number, wheat: number) => {
  const cornValue = 100 - beans - malt - wheat;
  return Math.min(100, Math.max(0, cornValue));
};

export const SliderRange: FC<SliderRangeProps> = ({ currentColor, imagePath, type }) => {
  const crackerState = useCrackerState();
  const { beans, malt, wheat } = crackerState;

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (type !== "corn") {
      dispatch(changeItem({ property: "corn", value: calculateAutoCorn(beans, malt, wheat) }));
    }
  }, [dispatch, type, beans, malt, wheat]);

  const handleChange = ({ property, value }: { property: keyof CrackerCalcState, value: number }) => {
    if (property === "corn") return;

    const totalSum = beans + malt + wheat;

    if (totalSum >= 100 && value > crackerState[property]) {
      const diff = totalSum + value - 100;
      if (value - diff >= 0) {
        value -= diff;
      } else {
        value = 0;
      }
    }

    if (totalSum + value > 100 || totalSum + value < 100) {
      const adjustedCorn = 100 - beans - malt - wheat;
      dispatch(changeItem({ property, value }));
      dispatch(changeItem({ property: "corn", value: adjustedCorn }));
    }
  }

  return (
    <div>
      <div className="">
        <img src={imagePath} alt="" />
      </div>
      <Slider
        min={0}
        max={100}
        railStyle={{
          backgroundColor: currentColor,
        }}
        trackStyle={{
          backgroundColor: currentColor,
        }}
        handleStyle={{
          ...dotStyles,
          borderColor: currentColor,
        }}
        value={crackerState[type]}
        onChange={(value) => handleChange({ property: type, value: Array.isArray(value) ? value[0] : value })}
      />
      <span>{crackerState[type]}%</span>
    </div>
  )
}
