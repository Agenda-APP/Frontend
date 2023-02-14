import styled, { css } from "styled-components";

import { NavLink } from "react-router-dom";

import SVG from "react-inlinesvg";

export const LinkElem = styled(NavLink)(
  ({ theme }) => css`
    &.active {
      color: ${theme.colors.primary};
      position: relative;
    }
    &.active:after {
      position: absolute;
      content: "";
      width: 40px;
      border-radius: 20px 0 0 20px;
      height: 25px;
      left: 170px;
      top: 20px;
      background: ${theme.colors.primary};
    }
  `
);
export const MenuItemStyle = styled.li(
  ({ theme }) => css`
    padding-top: ${theme.sizes.m};
    display: flex;
    align-items: center;
  `
);

export const StyledSVG = styled(SVG)(
  ({ theme }) => css`
    path {
      stroke: ${theme.colors.text};
    }
  `
);
