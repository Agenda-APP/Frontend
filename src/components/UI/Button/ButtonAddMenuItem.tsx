import React, { FC } from "react";
import plus from "../../../assets/plus-square.svg";
import { theme, Flex, Padding } from "../../../styles/style";
import { StyledText } from "../NavMenuItem/style";

const ButtonAddMenuItem: FC = () => {
  return (
    <Padding top="25px">
      <Flex>
        <img src={plus} alt="plus" />
        <StyledText color={theme.colors.primary}>Добавить</StyledText>
      </Flex>
    </Padding>
  );
};

export default ButtonAddMenuItem;
