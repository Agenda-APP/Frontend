import styled from "styled-components";

export enum Cursor {
  pointer = "pointer",
  auto = "auto",
}

export enum Colors {
  primary = "primary",
  dark = "dark",
}

export enum WeightText {
  s = "s",
  m = "m",
}
export enum FontSize {
  xs = "xs",
  s = "s",
  m = "m",
  l = "l",
}
export interface IText {
  weight?: WeightText;
  size?: FontSize;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
  color?: Colors;
  cursor?: Cursor;
}

export const Text = styled.p<IText>(
  ({
    theme,
    weight = WeightText.s,
    size = FontSize.xs,
    paddingBottom = "0",
    paddingRight = "0",
    paddingLeft = "0",
    color = Colors.dark,
    cursor = Cursor.auto,
  }) => ({
    fontWeight: theme.fontWeight[weight],
    fontSize: theme.fontSize[size],
    color: theme.colors[color],
    paddingBottom: paddingBottom,
    paddingRight: paddingRight,
    paddingLeft: paddingLeft,
    cursor: cursor,
  })
);
