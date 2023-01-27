import React, { FC } from "react";

import { Flex } from "../../styles/flex";
import { StyledText } from "../UI/NavMenuItem/style";

import logOut from "../../assets/log-in.svg";

export const Logout: FC = () => (
  <Flex>
    <img src={logOut} alt="logout" />
    <StyledText>Выйти</StyledText>
  </Flex>
);
