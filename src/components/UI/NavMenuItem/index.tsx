import React, { FC } from "react";

import { LinkElem, MenuItemStyle } from "./style";
import { Cursor, FontSize, Text, theme } from "../../../styles";

import { IMenuItem } from "../../Navigation/MenuContainer/types";

export const NavMenuItem: FC<IMenuItem> = (menuItem) => {
  const { link, icon, name } = menuItem;
  return (
    <LinkElem to={link}>
      <MenuItemStyle>
        <img src={icon} alt={name} />
        <Text
          size={FontSize.l}
          paddingLeft={theme.sizes.s}
          cursor={Cursor.pointer}
        >
          {name}
        </Text>
      </MenuItemStyle>
    </LinkElem>
  );
};
