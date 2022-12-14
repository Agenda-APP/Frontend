import React, { FC } from "react";
import { Flex } from "../../styles/style";
import logo from "../../assets/logo.svg";
import { LogoName } from "./logo.style";

interface ILogo {
  alt?: string;
}

const Logo: FC<ILogo> = ({ alt }) => {
  return (
    <Flex>
      <img src={logo} alt={alt} />
      <LogoName> Tasks Book</LogoName>
    </Flex>
  );
};
Logo.defaultProps = {
  alt: "logo",
};
export default Logo;
