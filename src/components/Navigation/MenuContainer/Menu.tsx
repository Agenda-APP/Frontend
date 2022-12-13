import React, { FC } from "react";
import { IMenu } from "./menu.interface";
import styled from "styled-components";
import { Flex, theme } from "../../../style";
import MenuItem from "./MenuItem/MenuItem";

const TitleMenu = styled.h2({
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "22px",
  letterSpacing: "0.03em",
  color: theme.colors.primary,
  marginTop: "55px",
});

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
  return (
    <Flex align="stretch" direction="column">
      <TitleMenu>{title}</TitleMenu>
      <ul>
        {items.map((item) => (
          <MenuItem item={item} key={item.link} />
        ))}
      </ul>
    </Flex>
  );
};
export default Menu;
