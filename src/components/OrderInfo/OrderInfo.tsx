import { FC, useState } from "react";
import { CountOrder } from "../../icons";
import { useBasket } from "../../hooks/useBasket";
import { BasketContent } from "../BasketContent/BasketContent";

import { RiArrowDropDownLine } from "react-icons/ri";

import sass from "./OrderInfo.module.scss";

export const OrderInfo: FC = () => {
  const [toggleBasket, setToggleBasket] = useState(false);
  const { basket } = useBasket();

  return (
    <div className={sass.orderInfoWrapper}>
      <div className={sass.orderCount}>
        <CountOrder />
        <span>{basket.list.length}</span>
      </div>
      <p className={sass.orderTotal}>total: {basket.total} &#8364;</p>
      <button
        onClick={() => setToggleBasket(prev => !prev)}
        className={sass.showBasket}
        type="button">
        details
        <RiArrowDropDownLine color="#fff" size={24} />
      </button>
      {
        toggleBasket &&
        <BasketContent setToggleBasket={setToggleBasket} />
      }
    </div>
  )
}
