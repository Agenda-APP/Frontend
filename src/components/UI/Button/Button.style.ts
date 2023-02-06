import styled, { css } from "styled-components";
import { Variant } from "./Button";

interface ButtonStyledProps {
  variant: Variant;
  borders: Variant;
  textColor: Variant;
}

export const ButtonStyled = styled.button<ButtonStyledProps>(
  ({ variant, theme, borders, textColor }) => ({
    minWidth: 186,
    background: theme.colors[variant],
    borderRadius: theme.borders.m,
    padding: `${theme.sizes.xs} ${theme.sizes.l}`,
    outline: "inherit",
    border: `2px solid ${theme.colors[borders]}`,
    cursor: "pointer",
    color: theme.colors[textColor],
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
