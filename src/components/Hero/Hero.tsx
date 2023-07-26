import sass from "./Hero.module.scss";

import { Container } from "../Container/Container";
import { FC } from "react";

export const Hero: FC = () => {
  return (
    <section className={sass.hero}>
      <Container>
        <div className={sass.heroInner}>
          
        </div>
      </Container>
    </section>
  )
}
