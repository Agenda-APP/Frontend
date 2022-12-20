import React, { FC } from "react";
import { StyledText } from "./style";
import { IMenuItem } from "../../Navigation/MenuContainer/types";
import { LinkElem, MenuItemStyle } from "./style";

export const NavMenuItem: FC<{ menuItem: IMenuItem }> = ({ menuItem }) => {
  return (
    <LinkElem to={menuItem.link}>
      <MenuItemStyle>
        <img src={menuItem.icon} alt={menuItem.name} />
        <StyledText>{menuItem.name}</StyledText>
      </MenuItemStyle>
    </LinkElem>
  );
};
