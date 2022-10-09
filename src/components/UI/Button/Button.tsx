import React, { FC } from "react";
import { ButtonStyled } from "./Button.style";

interface ButtonProps {
  type?: "button" | "submit";
  children: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  type = "button",
  children,
}) => {
  return (
    <ButtonStyled onClick={onClick} type={type}>
      {children}
    </ButtonStyled>
  );
};
