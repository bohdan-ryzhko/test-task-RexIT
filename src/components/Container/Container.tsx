import { FC, ReactNode } from "react";
import sass from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
}

export const Container:FC<ContainerProps> = ({ children }) => {
  return <div className={sass.container}>{children}</div>
}
