import React, { FC } from "react";
import Menu from "./Menu";
import { categoryMenu, staticMenu } from "./data";
import ButtonAddMenuItem from "../../UI/Button/ButtonAddMenuItem";

export const MenuContainer: FC = () => {
  return (
    <nav>
      <Menu {...categoryMenu} />
      <ButtonAddMenuItem />
      <Menu {...staticMenu} />
    </nav>
  );
};
