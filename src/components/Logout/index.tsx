import React, { FC } from "react";

import { FontSize, Text, Cursor, PaddingValue } from "../../styles";

import logoutImg from "../../assets/logout.svg";

import { LinkElem, StyledSVG, MenuItemStyle } from "../UI/NavMenuItem/style";
import { useAppDispatch } from "../../hooks/redux";
import { logout } from "../../store/user/userActions";

export const Logout: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <LinkElem to="/login" onClick={() => dispatch(logout)}>
        <MenuItemStyle>
          <StyledSVG src={logoutImg} />
          <Text
            size={FontSize.l}
            paddingLeft={PaddingValue.s}
            cursor={Cursor.pointer}
          >
            Выйти
          </Text>
        </MenuItemStyle>
      </LinkElem>
    </>
  );
};
