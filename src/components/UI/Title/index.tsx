import React, { FC } from "react";
import { TitleStyle } from "./style";

export enum VariantSize {
  l = "l",
  xl = "xl",
}

export enum AlignTitle {
  center = "center",
  default = "start",
}

interface ITitle {
  children: string;
  variant?: VariantSize;
  align?: AlignTitle;
}

export const Title: FC<ITitle> = ({
  children,
  variant = VariantSize.xl,
  align = AlignTitle.default,
}) => {
  return (
    <TitleStyle variant={variant} align={align}>
      {children}
    </TitleStyle>
  );
};
