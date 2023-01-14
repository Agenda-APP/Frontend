import React, { FC } from "react";
import { IMenu } from "./types";
import { Flex, Padding, FlexValue, PaddingSizes } from "../../../styles";

import { TitleMenu, NavMenuItem } from "../../../components";

export const MenuSection: FC<IMenu> = ({ singleMenu, title }) => {
  const renderMenuItem = singleMenu.map((menuItem) => (
    <NavMenuItem {...menuItem} key={menuItem.id} />
  ));
  return (
    <Flex align={FlexValue.stretch} direction={FlexValue.column}>
      <Padding top={PaddingSizes.l}>
        <TitleMenu>{title}</TitleMenu>
        <ul>{renderMenuItem}</ul>
      </Padding>
    </Flex>
  );
};
