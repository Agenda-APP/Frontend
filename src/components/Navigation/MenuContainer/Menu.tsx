import React, { FC } from "react";
import { IMenu } from "./types";
import { Flex, Padding } from "../../../styles/style";
import { TitleMenu } from "../../UI/TitleMenu";
import { NavMenuItem } from "../../UI/NavMenuItem";

const Menu: FC<IMenu> = ({ items, title }) => {
  const renderMenuItem = items.map((menuItem) => (
    <NavMenuItem {...menuItem} key={menuItem.id} />
  ));
  return (
    <Flex align="stretch" direction="column">
      <Padding top="45px">
        <TitleMenu>{title}</TitleMenu>
        <ul>{renderMenuItem}</ul>
      </Padding>
    </Flex>
  );
};
export default Menu;
