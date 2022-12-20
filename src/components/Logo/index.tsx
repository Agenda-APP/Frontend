import React, { FC } from "react";
import { Flex } from "../../styles/style";
import logo from "../../assets/logo.svg";
import { LogoName } from "./style";

export const Logo: FC = () => (
  <Flex>
    <img src={logo} alt="logo" />
    <LogoName> Tasks Book</LogoName>
  </Flex>
);
