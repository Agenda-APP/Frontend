import React, { FC } from "react";
import styled from "styled-components";
import { theme, Flex } from "../../style";
import logo from "../../assets/logo.svg";

const LogoName = styled.span({
  display: "inline-block",
  fontWeight: 600,
  fontSize: 18,
  lineHeight: "22px",
  letterSpacing: "0.03em",
  color: theme.colors.primary,
  paddingLeft: 7,
});

const Logo: FC = () => {
  return (
    <Flex>
      <img src={logo} alt="logo" />
      <LogoName>
        Tasks <br></br> Book
      </LogoName>
    </Flex>
  );
};
export default Logo;
