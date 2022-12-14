import React, { FC } from "react";
import Menu from "./Menu";
import { categoryMenu, staticMenu } from "./menu.data";
import ButtonAddMenuItem from "../../UI/Button/ButtonAddMenuItem";

const MenuContainer: FC = () => {
  return (
    <nav>
      <Menu menu={categoryMenu} />
      <ButtonAddMenuItem />
      <Menu menu={staticMenu} />
    </nav>
  );
};

export default MenuContainer;
