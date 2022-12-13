import React, { FC } from "react";
import { MdLogin } from "react-icons/md";

import { Flex, SpanText } from "../../style";

const LogOutButton: FC = () => {
  return (
    <Flex cursor="pointer">
      <MdLogin size={20} />
      <SpanText>Выйти</SpanText>
    </Flex>
  );
};
export default LogOutButton;
