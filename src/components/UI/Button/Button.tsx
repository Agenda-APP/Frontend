import React, { FC, ReactNode } from "react";
import { ButtonStyled } from "./Button.style";

export enum Variant {
  transparent = "transparent",
  primary = "primary",
  warning = "warning",
}

interface ButtonProps {
  type?: "button" | "submit";
  onClick?: () => void;
  variant?: Variant;
  icon?: string;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  type = "button",
  children,
  variant = Variant.primary,
}) => {
  return (
    <ButtonStyled onClick={onClick} type={type} variant={variant}>
      <span>{children}</span>
    </ButtonStyled>
  );
};
