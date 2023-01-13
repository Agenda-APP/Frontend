import React, { FC } from "react";
import { Flex } from "../../styles/flex";
import logOut from "../../assets/log-in.svg";
import { StyledText } from "../UI/NavMenuItem/style";

export const Logout: FC = () => (
  <Flex>
    <img src={logOut} alt="logout" />
    <StyledText>Выйти</StyledText>
  </Flex>
);
