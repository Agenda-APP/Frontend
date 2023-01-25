import styled from "styled-components";

export enum WeightText {
  s = "s",
  m = "m",
}
export enum FontSize {
  xs = "xs",
  s = "s",
}
export interface IText {
  weight?: WeightText;
  size?: FontSize;
  padding?: string;
}

export const Text = styled.p<IText>(
  ({ theme, weight = WeightText.s, size = FontSize.xs, padding = "0" }) => ({
    fontWeight: theme.fontWeight[weight],
    fontSize: theme.fontSize[size],
    color: theme.colors.dark,
    paddingBottom: padding,
  })
);
