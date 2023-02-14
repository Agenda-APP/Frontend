import styled from "styled-components";
import { AlignTitle, VariantSize } from "./index";

interface TitleStyledProps {
  variant: VariantSize;
  align: AlignTitle;
}

export const TitleStyle = styled.h2<TitleStyledProps>(
  ({ theme, variant, align }) => ({
    fontWeight: theme.fontWeight.m,
    fontSize: theme.fontSize[variant],
    color: theme.colors.primary,
    paddingBottom: theme.sizes.s,
    textAlign: align,
  })
);
