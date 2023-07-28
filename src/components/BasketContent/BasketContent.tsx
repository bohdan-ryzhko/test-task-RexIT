import { FC } from "react";
import { removePack } from "../../redux/basketSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types";
import { useBasket } from "../../hooks/useBasket";

import CrackerImage1 from "../../images/cracker-calc/cracker-1.png";
import CrackerImage2 from "../../images/cracker-calc/cracker-2.png";
import CrackerImage3 from "../../images/cracker-calc/cracker-3.png";
import CrackerImage4 from "../../images/cracker-calc/cracker-4.png";

import sass from "./BasketContent.module.scss";

interface BasketContentProps {
  setToggleBasket: (prev: boolean) => void;
}

export const BasketContent: FC<BasketContentProps> = ({ setToggleBasket }) => {

  const dispatch: AppDispatch = useDispatch();
  const { basket } = useBasket();

  return (
    <div className={sass.basketBody}>
      <button
        onClick={() => setToggleBasket(false)}
        className={sass.closeBasket}
        type="button">
        <IoMdClose color="#4d4d4d" size={30}/>
      </button>
      {
        basket.list.length === 0 &&
        <p style={{ color: "#4d4d4d", textAlign: "center" }}>Choose your pack of crackers</p>
      }
      {
        basket.list.length > 0 &&
        <ul className={sass.basketImgList}>
          <li className={sass.basketImg}>
            <img width={23} src={CrackerImage1} alt="" />
          </li>
          <li className={sass.basketImg}>
            <img width={23} src={CrackerImage2} alt="" />
          </li>
          <li className={sass.basketImg}>
            <img width={23} src={CrackerImage3} alt="" />
          </li>
          <li className={sass.basketImg}>
            <img width={23} src={CrackerImage4} alt="" />
          </li>
        </ul>
      }
      <ul className={sass.basketList}>
        {
          basket.list.length > 0 && basket.list.map(pack => <li className={sass.basketItem} key={pack.id}>
            <span className={sass.percent}>{pack.beans}%</span>
            <span className={sass.percent}>{pack.malt}%</span>
            <span className={sass.percent}>{pack.wheat}%</span>
            <span className={sass.percent}>{pack.corn}%</span>
            <span className={sass.price}>{pack.price}&#8364;</span>
            <button
              onClick={() => dispatch(removePack(pack.id))}
              type="button">
              <AiOutlineCloseCircle size={20} />
            </button>
          </li>)
        }
      </ul>
      {
        basket.list.length > 0 &&
        <button
          className={sass.checkoutBtn}
          type="button"
        >
          checkout
        </button>
      }
    </div>
  )
}
