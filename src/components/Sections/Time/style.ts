import styled from "styled-components";

export const TimeText = styled.span(({ theme }) => ({
  fontWeight: theme.fontWeight.m,
  fontSize: theme.fontSize.xl,
  paddingLeft: theme.sizes.xs,
  color: theme.colors.dark,
}));
