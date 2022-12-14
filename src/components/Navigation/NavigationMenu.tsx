import React, { FC } from "react";

import styled from "styled-components";
import { theme } from "../../styles/style";

import MenuContainer from "./MenuContainer/MenuContainer";
import LogOutButton from "../Auth/LogOutButton";

import Logo from "../Logo/Logo";

const NavigationStyle = styled.div`
  max-width: 231px;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  box-shadow: ${theme.boxShadow.global};
  overflow: inherit;
  background: white;
  padding: 20px;
`;
export const Navigation: FC = () => {
  return (
    <NavigationStyle>
      <Logo />
      <MenuContainer />
      <LogOutButton />
    </NavigationStyle>
  );
};
