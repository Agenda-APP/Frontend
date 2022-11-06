import React, { FC, ReactNode } from "react";
import { ButtonStyled } from "./Button.style";

export enum Variant {
  transparent = "transparent",
  primary = "primary",
  warning = "warning",
  classic = "classic",
}
export enum Border {
  none = "none",
  primaryBorder = "primaryBorder",
  warningBorder = "warningBorder",
}
export enum Title {
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
  border: Border;
  title: Title;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  type = "button",
  children,
  variant = Variant.primary,
  border,
  title,
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      type={type}
      variant={variant}
      border={border}
      title={title}
    >
      <span>{children}</span>
    </ButtonStyled>
  );
};
