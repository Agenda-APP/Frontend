import styled from "styled-components";

export enum Cursor {
  pointer = "pointer",
  auto = "auto",
}

export enum Colors {
  primary = "primary",
  text = "text",
  dark = "dark",
  warning = "warning",
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
export enum AlignText {
  default = "start",
  center = "center",
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
  paddingTop?: PaddingValue;
  padding?: PaddingValue;
  color?: Colors;
  cursor?: Cursor;
  align?: AlignText;
}

export const Text = styled.p<IText>(
  ({
    theme,
    weight = WeightText.s,
    size = FontSize.xs,
    paddingBottom = PaddingValue.none,
    paddingRight = PaddingValue.none,
    paddingLeft = PaddingValue.none,
    paddingTop = PaddingValue.none,
    color = Colors.text,
    cursor = Cursor.auto,
    align = AlignText.default,
  }) => ({
    fontWeight: theme.fontWeight[weight],
    fontSize: theme.fontSize[size],
    color: theme.colors[color],
    paddingBottom: theme.sizes[paddingBottom],
    paddingRight: theme.sizes[paddingRight],
    paddingLeft: theme.sizes[paddingLeft],
    paddingTop: theme.sizes[paddingTop],
    cursor: cursor,
    textAlign: align,
  })
);
