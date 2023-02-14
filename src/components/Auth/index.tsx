import React, { FC, useState } from "react";

import { burger } from "../../assets";

import { Flex, FlexValue } from "../../styles";
import { Body, StyledSVG } from "./style";

import { SignIn, SignUp, CopyRight, Logo, Section } from "../../components";
import { Width } from "../UI/Section";

export const Auth: FC = () => {
  const [type, setType] = useState<"login" | "register">("login");

  const renderForm =
    type === "login" ? (
      <SignIn setType={setType} />
    ) : (
      <SignUp setType={setType} />
    );

  return (
    <Body>
      <Flex justify={FlexValue.between}>
        <Logo />
        <StyledSVG src={burger} />
      </Flex>
      <Section width={Width.form}>{renderForm}</Section>
      <CopyRight />
    </Body>
  );
};
