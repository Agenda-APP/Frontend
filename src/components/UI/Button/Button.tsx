import React, { FC, ReactNode } from "react";
import { ButtonStyled } from "./Button.style";

export enum Variant {
  transparent = "transparent",
  primary = "primary",
  warning = "warning",
  white = "white",
}

interface ButtonProps {
  type?: "button" | "submit";
  onClick?: () => void;
  variant?: Variant;
  icon?: string;
  children?: ReactNode;
  borders?: Variant;
  textColor?: Variant;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  type = "button",
  children,
  variant = Variant.primary,
  borders = Variant.primary,
  textColor = Variant.white,
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      type={type}
      variant={variant}
      borders={borders}
      textColor={textColor}
    >
      {children}
    </ButtonStyled>
  );
};
