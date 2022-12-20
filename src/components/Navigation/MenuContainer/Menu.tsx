import React, { FC } from "react";
import { IMenu } from "./types";
import { Flex } from "../../../styles/style";
import { TitleMenu } from "../../UI/TitleMenu";
import { NavMenuItem } from "../../UI/NavMenuItem";

const Menu: FC<IMenu> = ({ items, title }) => {
  const renderMenuItem = items.map((menuItem, index) => (
    <NavMenuItem menuItem={menuItem} key={index} />
  ));
  return (
    <Flex align="stretch" direction="column" padding="45px 0 0 0">
      <TitleMenu>{title}</TitleMenu>
      <ul>{renderMenuItem}</ul>
    </Flex>
  );
};
export default Menu;
