import styled from "styled-components";
import { Variant } from "./Button";

interface ButtonStyledProps {
  variant: Variant;
}

export const ButtonStyled = styled.button<ButtonStyledProps>(
  ({ variant, theme }) => ({
    width: 182,
    height: 42,
    background: theme.colors[variant],
    borderRadius: theme.borders.m,
    outline: "inherit",
    border: 0,
    cursor: "pointer",
    color: "white",
  })
);
