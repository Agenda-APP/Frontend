import React, { FC } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { menus } from "./menu.data";
import ButtonAddMenuItem from "../../UI/Button/ButtonAddMenuItem";

const MenuContainerStyled = styled.nav`
  flex-grow: 1;
`;

const MenuContainer: FC = () => {
  return (
    <MenuContainerStyled>
      <Menu menu={menus[0]} />
      <ButtonAddMenuItem />
      <Menu menu={menus[1]} />
    </MenuContainerStyled>
  );
};

export default MenuContainer;
