import styled, { css } from "styled-components";
import { Variant } from "./Button";

interface ButtonStyledProps {
  variant: Variant;
}

export const ButtonStyled = styled.button<ButtonStyledProps>(
  ({ variant, theme }) => ({
    width: 186,
    height: 42,
    background: theme.colors[variant],
    borderRadius: theme.borders.m,
    padding: `0 ${theme.sizes.l}`,
    outline: "inherit",
    border: 0,
    cursor: "pointer",
    color: "white",
    fontWeight: theme.fontWeight.m,
    fontSize: theme.fontSize.m,
    transition: theme.animation.main,
  }),
  css`
    &:hover {
      transform: scale(1.05);
    }
  `
);
