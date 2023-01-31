import styled from "styled-components";

export enum Cursor {
  pointer = "pointer",
  auto = "auto",
}

export enum Colors {
  primary = "primary",
  text = "text",
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

export enum PaddingValue {
  xs = "xs",
  s = "s",
  m = "m",
  l = "l",
  none = "none",
}
export interface IText {
  weight?: WeightText;
  size?: FontSize;
  paddingBottom?: PaddingValue;
  paddingRight?: PaddingValue;
  paddingLeft?: PaddingValue;
  color?: Colors;
  cursor?: Cursor;
}

export const Text = styled.p<IText>(
  ({
    theme,
    weight = WeightText.s,
    size = FontSize.xs,
    paddingBottom = PaddingValue.none,
    paddingRight = PaddingValue.none,
    paddingLeft = PaddingValue.none,
    color = Colors.text,
    cursor = Cursor.auto,
  }) => ({
    fontWeight: theme.fontWeight[weight],
    fontSize: theme.fontSize[size],
    color: theme.colors[color],
    paddingBottom: theme.sizes[paddingBottom],
    paddingRight: theme.sizes[paddingRight],
    paddingLeft: theme.sizes[paddingLeft],
    cursor: cursor,
  })
);
