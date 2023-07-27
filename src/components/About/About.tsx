import sass from "./About.module.scss";
import { Container } from "../Container/Container";
import { FC } from "react";
import { CalculateCracker } from "../CalculateCracker/CalculateCracker";

import { BsPlus } from 'react-icons/bs';
import crackerImage from "../../images/about/cracker.png";
import choosePack from "../../images/cracker-calc/choose-pack.png";
import { SelectPack } from "../SelectPack/SelectPack";
import { useOptionPack } from "../../hooks/useOptionPack";
import { AppDispatch } from "../../types";
import { useDispatch } from "react-redux";
import { addPack } from "../../redux/basketSlice";
import { useCrackerState } from "../../hooks/useCrackerState";

export const About: FC = () => {

  const { pack } = useOptionPack();
  const crackerState = useCrackerState();
  const dispatch: AppDispatch = useDispatch();

  const addCracker = () => {
    if (pack === "") {
      console.log("error");
      return;
    }

    dispatch(addPack({ ...crackerState, pack }));
  }

  return (
    <section className={sass.about}>
      <Container>
        <div className={sass.aboutInner}>
          <div className={sass.aboutDescription}>
            <div className={sass.aboutImage}>
              <img src={crackerImage} alt="Cracker" />
            </div>
            <h2 className={sass.aboutTitile}>about cracker</h2>
            <div className={sass.aboutText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
              </p>
              <span>Cracker</span>
            </div>
          </div>
          <CalculateCracker />
          <div className={sass.selectPack}>
            <div className={sass.selectWrapper}>
              <div className={sass.choosePackImage}>
                <img src={choosePack} alt="Choose Yor Pack" />
              </div>
              <SelectPack />
            </div>
            <button
              onClick={addCracker}
              className={sass.addPack}
              type="button"
            >
              <BsPlus size={35} color="#fff" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
