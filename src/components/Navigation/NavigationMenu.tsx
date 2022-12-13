import React, { FC } from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import MenuContainer from "./MenuContainer/MenuContainer";
import LogOutButton from "../Auth/LogOutButton";

const NavigationStyle = styled.div`
  max-width: 231px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 25px rgba(29, 52, 54, 0.08);
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
