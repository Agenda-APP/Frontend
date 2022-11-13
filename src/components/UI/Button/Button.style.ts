import styled from "styled-components";
import { Variant } from "./Button";

interface ButtonStyledProps {
  variant: Variant;
}

export const ButtonStyled = styled.button<ButtonStyledProps>(
  ({ variant, theme }) => ({
    height: 42,
    background: theme.colors[variant],
    borderRadius: theme.borders.m,
    outline: "inherit",
    border: "none",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    padding: "5px 20px 8px 20px",
  })
);
