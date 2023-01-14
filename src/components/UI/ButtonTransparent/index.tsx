import React, { FC } from "react";
import plus from "../../../assets/plus-square.svg";
import { Flex, Padding, PaddingSizes, theme } from "../../../styles";
import { StyledText } from "../NavMenuItem/style";

export const ButtonTransparent: FC = () => (
  <Padding top={PaddingSizes.m}>
    <Flex>
      <img src={plus} alt="plus" />
      <StyledText color={theme.colors.primary}>Добавить</StyledText>
    </Flex>
  </Padding>
);
