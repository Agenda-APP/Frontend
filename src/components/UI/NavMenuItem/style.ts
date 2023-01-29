import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../../styles";

export const LinkElem = styled(NavLink)`
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
`;
export const MenuItemStyle = styled.li`
  padding-top: ${theme.sizes.m};
  display: flex;
  align-items: center;
`;
