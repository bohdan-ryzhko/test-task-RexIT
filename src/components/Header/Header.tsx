import sass from "./Header.module.scss";

import { FC, useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { addNoScroll, removeNoScroll } from "../../utils";
import { OrderInfo } from "../OrderInfo/OrderInfo";

export const Header: FC = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    if (toggleMobileMenu) {
      addNoScroll();
    } else {
      removeNoScroll();
    }

    return () => {
      removeNoScroll();
    }
  }, [toggleMobileMenu]);

  const handleToggleMenu = () => {
    setToggleMobileMenu(prev => !prev)
  }

  return (
    <header className={sass.header}>
      <div className={sass.headerTop}>
        <Container>
          <div className={sass.headerTopInner}>
            <Logo />
            <OrderInfo />
            <button
              className={sass.toggleBtn}
              onClick={handleToggleMenu}
              type="button">
              {
                toggleMobileMenu
                  ? <AiOutlineClose color="#fff" size={25} />
                  : <AiOutlineMenu color="#fff" size={25} />
              }
            </button>
          </div>
        </Container>
      </div>
      <div className={sass.headerNavigation}>
        <Container>
          <Navigation toggleMobileMenu={toggleMobileMenu} />
        </Container>
      </div>
    </header>
  )
}
