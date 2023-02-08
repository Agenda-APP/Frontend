import React, { FC } from "react";
import { TitleStyle } from "./style";

export enum VariantSize {
  l = "l",
  xl = "xl",
}

interface ITitle {
  children: string;
  variant?: VariantSize;
}

export const Title: FC<ITitle> = ({ children, variant = VariantSize.xl }) => {
  return <TitleStyle variant={variant}>{children}</TitleStyle>;
};
