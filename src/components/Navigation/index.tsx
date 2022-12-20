import React, { FC } from "react";

import { MenuContainer } from "./MenuContainer/MenuContainer";
import { Logo } from "../Logo";
import { LogOutButton } from "../LogOutButton";

import { NavigationStyle } from "./style";

export const Navigation: FC = () => {
  return (
    <NavigationStyle>
      <Logo />
      <MenuContainer />
      <LogOutButton />
    </NavigationStyle>
  );
};
