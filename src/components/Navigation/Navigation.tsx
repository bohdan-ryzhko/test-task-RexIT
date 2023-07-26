import sass from "./Navigation.module.scss";
import { FC } from "react";

const navigationLinks = [
  { text: "home", id: "id-01" },
  { text: "about us", id: "id-02" },
  { text: "contacts us", id: "id-03" },
  { text: "checkout", id: "id-04" },
  { text: "account", id: "id-05" },
];

interface NavigationProps {
  toggleMobileMenu: boolean;
}

export const Navigation: FC<NavigationProps> = ({ toggleMobileMenu }) => {

  console.log(window.location.pathname)

  return (
    <nav className={toggleMobileMenu ? sass.navigationActive : sass.navigation}>
      <ul className={sass.navigationList}>
        {
          navigationLinks.map(({ id, text }) => <li key={id} className={sass.navigationItem}>
            <a href="/">{text}</a>
          </li>)
        }
      </ul>
    </nav>
  )
}
