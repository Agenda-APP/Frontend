import React, { FC } from "react";

import { Flex } from "../../styles";
import { LogoName } from "./style";

import logo from "../../assets/logo.svg";

export const Logo: FC = () => (
  <Flex>
    <img src={logo} alt="logo" />
    <LogoName> Tasks Book</LogoName>
  </Flex>
);
