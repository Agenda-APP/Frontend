import styled from "styled-components";
import { Variant } from "./Button";
import { Border } from "./Button";
import { Title } from "./Button";

interface ButtonStyledProps {
  variant: Variant;
  border: Border;
  title: Title;
}

export const ButtonStyled = styled.button<ButtonStyledProps>(
  ({ variant, theme, border, title }) => ({
    width: 182,
    height: 42,
    background: theme.colors[variant],
    borderRadius: theme.borders.m,
    outline: "inherit",
    border: theme.border[border],
    cursor: "pointer",
    color: theme.colors[title],
    fontWeight: "bold",
  })
);
