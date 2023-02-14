import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";

export const TimeText = styled.span(({ theme }) => ({
  fontWeight: theme.fontWeight.m,
  fontSize: theme.fontSize.xl,
  paddingLeft: theme.sizes.xs,
  color: theme.colors.text,
}));

export const StyledSVG = styled(SVG)(
  ({ theme }) => css`
    path {
      stroke: ${theme.colors.text};
    }
  `
);
