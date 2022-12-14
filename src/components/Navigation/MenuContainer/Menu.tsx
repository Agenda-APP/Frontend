import React, { FC } from "react";
import { IMenu } from "./menu.interface";
import styled from "styled-components";
import { Flex, theme } from "../../../styles/style";
import MenuItem from "./MenuItem/MenuItem";

const TitleMenu = styled.h2({
  fontWeight: theme.fontWeight.m,
  fontSize: theme.fontSize.title,
  lineHeight: "22px",
  letterSpacing: "0.03em",
  color: theme.colors.primary,
  marginTop: "55px",
});

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
  const renderMenuItem = items.map((menuItem) => (
    <MenuItem item={menuItem} key={menuItem.link} />
  ));
  return (
    <Flex align="stretch" direction="column">
      <TitleMenu>{title}</TitleMenu>
      <ul>{renderMenuItem}</ul>
    </Flex>
  );
};
export default Menu;
