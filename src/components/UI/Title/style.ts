import styled from "styled-components";
import { VariantSize } from "./index";

interface TitleStyledProps {
  variant: VariantSize;
}

export const TitleStyle = styled.h2<TitleStyledProps>(({ theme, variant }) => ({
  fontWeight: theme.fontWeight.m,
  fontSize: theme.fontSize[variant],
  color: theme.colors.primary,
  paddingBottom: theme.sizes.s,
}));
