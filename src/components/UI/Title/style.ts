import styled from "styled-components";
import { Variant } from "./index";

interface TitleStyledProps {
  variant: Variant;
}

export const TitleStyle = styled.h2<TitleStyledProps>(({ theme, variant }) => ({
  fontWeight: theme.fontWeight.m,
  fontSize: theme.fontSize[variant],
  color: theme.colors.primary,
  paddingBottom: theme.sizes.s,
}));
