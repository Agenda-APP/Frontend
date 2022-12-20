import React, { FC } from "react";
import plus from "../../../assets/plus-square.svg";
import { theme, Flex } from "../../../styles/style";
import { StyledText } from "../NavMenuItem/style";

const ButtonAddMenuItem: FC = () => {
  return (
    <Flex padding="25px 0 0 0" cursor="pointer">
      <img src={plus} alt="plus" />
      <StyledText color={theme.colors.primary}>Добавить</StyledText>
    </Flex>
  );
};

export default ButtonAddMenuItem;
