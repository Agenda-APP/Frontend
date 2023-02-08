import React, { FC } from "react";

import { Flex, FontSize, Text, Cursor, PaddingValue } from "../../styles";

import logout from "../../assets/logout.svg";

import { StyledSVG } from "../UI/NavMenuItem/style";

export const Logout: FC = () => (
  <Flex>
    <StyledSVG src={logout} />
    <Text
      size={FontSize.l}
      paddingLeft={PaddingValue.s}
      cursor={Cursor.pointer}
    >
      Выйти
    </Text>
  </Flex>
);
