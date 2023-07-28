import { Container } from "../Container/Container";
import { FC } from "react";

import sass from "./Footer.module.scss";
import { Facebook, Instagram, Location, Phone, Pinterest, Share } from "../../icons";

export const Footer: FC = () => {
  return (
    <footer className={sass.footer}>
      <Container>
        <div className={sass.footerInner}>
          <ul className={sass.contactList}>
            <li className={sass.contactItem}>
              <p className={sass.itemName}>
                <Phone />
                phone
              </p>
              <div className={sass.contactInfo}>
                <a href="tel:+489873456789">+48 (987) 345 - 6789</a>
              </div>
            </li>
            <li className={sass.contactItem}>
              <address>
                <p className={sass.itemName}>
                  <Location />
                  address
                </p>
                <div className={sass.contactInfo}>
                  <p className={sass.address}>
                    Cracker Inc. <br />
                    10 Cloverfield Lane <br />
                    Berlin IL 10928, Germany
                  </p>
                </div>
              </address>
            </li>
            <li className={sass.contactItem}>
              <p className={sass.itemName}>
                <Share />
                share
              </p>
              <ul className={sass.socialList}>
                <li className={sass.socialItem}>
                  <div className={sass.socialIcon}>
                    <Pinterest />
                  </div>
                  <a target="_blank" href="/">pinterest.com</a>
                </li>
                <li className={sass.socialItem}>
                  <div className={sass.socialIcon}>
                    <Facebook />
                  </div>
                  <a target="_blank" href="/">facebook.com</a>
                </li>
                <li className={sass.socialItem}>
                  <div className={sass.socialIcon}>
                    <Instagram />
                  </div>
                  <a target="_blank" href="/">instagram.com</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
