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
    top: 25px;
    background: ${theme.colors.primary};
  }
`;
export const MenuItemStyle = styled.li`
  padding-top: ${theme.size.m};
  display: flex;
  align-items: center;
`;

export const StyledText = styled.span`
  color: ${(props) => props.color || theme.colors.secondary};
  margin-left: ${theme.size.s};
  font-weight: ${theme.fontWeight.s};
  font-size: ${theme.fontSize.l};
  transition: ${theme.animation.main};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
