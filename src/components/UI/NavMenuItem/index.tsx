import React, { FC } from "react";
import { StyledText, LinkElem, MenuItemStyle } from "./style";
import { IMenuItem } from "../../Navigation/MenuContainer/types";

export const NavMenuItem: FC<IMenuItem> = (menuItem) => {
  const { link, icon, name } = menuItem;
  return (
    <LinkElem to={link}>
      <MenuItemStyle>
        <img src={icon} alt={name} />
        <StyledText>{name}</StyledText>
      </MenuItemStyle>
    </LinkElem>
  );
};
