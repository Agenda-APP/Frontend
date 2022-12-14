import React, { FC } from "react";
import logOut from "../../assets/log-in.svg";

import { Flex, StyledText } from "../../styles/style";

const LogOutButton: FC = () => {
  return (
    <Flex cursor="pointer">
      <img src={logOut} alt="logOut" />
      <StyledText>Выйти</StyledText>
    </Flex>
  );
};
export default LogOutButton;
