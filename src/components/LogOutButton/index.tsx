import React, { FC } from "react";
import logOut from "../../assets/log-in.svg";

import { Flex } from "../../styles/style";
import { StyledText } from "../UI/NavMenuItem/style";

export const LogOutButton: FC = () => {
  return (
    <Flex cursor="pointer">
      <img src={logOut} alt="logOut" />
      <StyledText>Выйти</StyledText>
    </Flex>
  );
};
