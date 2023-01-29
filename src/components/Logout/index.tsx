import React, { FC } from "react";

import { Flex, FontSize, Text, theme, Cursor } from "../../styles";

import logout from "../../assets/logout.svg";

export const Logout: FC = () => (
  <Flex>
    <img src={logout} alt="logout" />
    <Text size={FontSize.l} paddingLeft={theme.sizes.s} cursor={Cursor.pointer}>
      Выйти
    </Text>
  </Flex>
);
