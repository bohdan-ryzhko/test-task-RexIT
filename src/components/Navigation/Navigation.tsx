import sass from "./Navigation.module.scss";
import { FC } from "react";

interface NavigationProps {
  toggleMobileMenu: boolean;
}


export const Navigation: FC<NavigationProps> = ({ toggleMobileMenu }) => {
  const defineLocation = (pathname: string) => pathname.split("/test-task-rexit").join("");

  return (
    <nav className={toggleMobileMenu ? sass.navigationActive : sass.navigation}>
      <ul className={sass.navigationList}>
        <li className={sass.navigationItem}>
          <a className={defineLocation(window.location.pathname) === "" ? sass.navLinkActiv : sass.navLink} href="/">home</a>
        </li>
        <li className={sass.navigationItem}>
          <a className={defineLocation(window.location.pathname) === "about" ? sass.navLinkActiv : sass.navLink} href="/">about us</a>
        </li>
        <li className={sass.navigationItem}>
          <a className={defineLocation(window.location.pathname) === "contacts" ? sass.navLinkActiv : sass.navLink} href="/">contacts us</a>
        </li>
        <li className={sass.navigationItem}>
          <a className={defineLocation(window.location.pathname) === "checkout" ? sass.navLinkActiv : sass.navLink} href="/">checkout</a>
        </li>
        <li className={sass.navigationItem}>
          <a className={defineLocation(window.location.pathname) === "account" ? sass.navLinkActiv : sass.navLink} href="/">account</a>
        </li>
      </ul>
    </nav>
  )
}
