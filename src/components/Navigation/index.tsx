import React, { FC } from "react";
import { MenuContainer, Logout, Logo } from "../../components";

import { NavigationStyle } from "./style";

export const Navigation: FC = () => {
  return (
    <NavigationStyle>
      <Logo />
      <MenuContainer />
      <Logout />
    </NavigationStyle>
  );
};
