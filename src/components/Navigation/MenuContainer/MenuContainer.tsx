import React, { FC } from "react";
import { categoryMenu, staticMenu } from "./data";
import { ButtonTransparent, MenuSection } from "../../../components";

export const MenuContainer: FC = () => {
  return (
    <nav>
      <MenuSection {...categoryMenu} />
      <ButtonTransparent />
      <MenuSection {...staticMenu} />
    </nav>
  );
};
