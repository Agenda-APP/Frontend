import React, { FC } from "react";

import { Flex } from "../../styles/flex";
import { StyledText } from "../UI/NavMenuItem/style";

import logout from "../../assets/logout.svg";

export const Logout: FC = () => (
  <Flex>
    <img src={logout} alt="logout" />
    <StyledText>Выйти</StyledText>
  </Flex>
);
