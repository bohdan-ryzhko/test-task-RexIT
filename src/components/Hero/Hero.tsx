import sass from "./Hero.module.scss";

import { Container } from "../Container/Container";
import { FC } from "react";

export const Hero: FC = () => {
  return (
    <section className={sass.hero}>
      <div className={sass.heroWrapper}>
        <Container>
          <div className={sass.heroInner}>
            <p className={sass.heroText}>
              <span>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
            </p>
            <div className={sass.heroTitleWrapper}>
              <h1 className={sass.heroTitle}>mostly tastes with freshes</h1>
              <button type="button" className={sass.heroTestBtn}>taste it</button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
