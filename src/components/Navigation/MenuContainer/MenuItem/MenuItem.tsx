import React, { FC } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { StyledText } from "../../../../styles/style";
import { IMenuItem } from "../menu.interface";

import "./MenuItem.css";

const MenuItemStyle = styled.li`
  padding-top: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  return (
    <NavLink to={item.link} style={{ position: "relative" }}>
      <MenuItemStyle>
        <img src={item.icon} alt={item.name} />
        <StyledText>{item.name}</StyledText>
      </MenuItemStyle>
    </NavLink>
  );
};
export default MenuItem;
