import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";

export const Body = styled.div(({ theme }) => ({
  display: "flex",
  height: "100vh",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: theme.sizes.l,
  background: theme.colors.bgBody,
}));

export const StyledSVG = styled(SVG)(
  ({ theme }) => css`
    cursor: pointer;
    path {
      fill: ${theme.colors.text};
    }
  `
);
