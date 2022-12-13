import React, { FC } from "react";
import styled from "styled-components";
import { SpanText } from "../../../../style";
import { IMenuItem } from "../menu.interface";
import { MaterialIcon } from "../../../UI/Icons/MaterialIcon";
import { NavLink } from "react-router-dom";
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
        <MaterialIcon icon={item.icon} />
        <SpanText>{item.name}</SpanText>
      </MenuItemStyle>
    </NavLink>
  );
};
export default MenuItem;
