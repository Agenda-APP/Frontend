import React, { FC, ReactNode } from "react";
import { ButtonStyled } from "./Button.style";
import iconPlus from "../../../assets/plusIcon.svg";

export enum Variant {
  transparent = "transparent",
  primary = "primary",
  warning = "warning",
  classic = "classic",
}

interface ButtonProps {
  type?: "button" | "submit";
  onClick?: () => void;
  variant?: Variant;
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
      <img className="iconPlus" src={iconPlus} alt="plus" />
      {children}
    </ButtonStyled>
  );
};
