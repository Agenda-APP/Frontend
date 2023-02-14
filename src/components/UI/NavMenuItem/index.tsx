import React, { FC } from "react";

import { LinkElem, MenuItemStyle, StyledSVG } from "./style";
import { Cursor, FontSize, Text, PaddingValue } from "../../../styles";

import { IMenuItem } from "../../Navigation/MenuContainer/types";

export const NavMenuItem: FC<IMenuItem> = (menuItem) => {
  const { link, icon, name } = menuItem;
  return (
    <LinkElem to={link}>
      <MenuItemStyle>
        <StyledSVG src={icon} />
        <Text
          size={FontSize.l}
          paddingLeft={PaddingValue.s}
          cursor={Cursor.pointer}
        >
          {name}
        </Text>
      </MenuItemStyle>
    </LinkElem>
  );
};
