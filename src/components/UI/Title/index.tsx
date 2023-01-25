import React, { FC } from "react";
import { TitleStyle } from "./style";

export enum Variant {
  l = "l",
  xl = "xl",
}

interface ITitle {
  children: string;
  variant?: Variant;
}

export const Title: FC<ITitle> = ({ children, variant = Variant.xl }) => {
  return <TitleStyle variant={variant}>{children}</TitleStyle>;
};
