import React, { FC } from "react";

import { ReactComponent as Arrow } from "../../../assets/menuArrow.svg";

import { MenuButton } from "./style";

interface IUserMenu {
  onClick?: () => void;
}

export const UserMenuButton: FC<IUserMenu> = ({ onClick }) => {
  return (
    <MenuButton onClick={onClick}>
      <Arrow />
    </MenuButton>
  );
};
