import { FC } from "react";
import { removePack } from "../../redux/basketSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import sass from "./BasketContent.module.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types";
import { useBasket } from "../../hooks/useBasket";

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
    </div>
  )
}
