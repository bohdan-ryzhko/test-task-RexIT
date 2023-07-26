import sass from "./Logo.module.scss";
import { FC } from "react";

export const Logo:FC = () => {
  return (
    <a className={sass.logo} href="/">Cracker</a>
  )
}