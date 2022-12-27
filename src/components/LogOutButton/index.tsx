import React, { FC } from "react";
import { Flex } from "../../styles/style";
import logOut from "../../assets/log-in.svg";
import { StyledText } from "../UI/NavMenuItem/style";

export const LogOutButton: FC = () => {
  return (
    <Flex>
      <img src={logOut} alt="logOut" />
      <StyledText>Выйти</StyledText>
    </Flex>
  );
};
