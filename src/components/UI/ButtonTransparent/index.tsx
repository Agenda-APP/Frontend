import React, { FC } from "react";

import plus from "../../../assets/plus-square.svg";

import {
  Colors,
  Cursor,
  Flex,
  FontSize,
  Padding,
  PaddingSizes,
  Text,
  PaddingValue,
} from "../../../styles";

export const ButtonTransparent: FC = () => (
  <Padding top={PaddingSizes.m}>
    <Flex>
      <img src={plus} alt="plus" />
      <Text
        color={Colors.primary}
        size={FontSize.l}
        paddingLeft={PaddingValue.m}
        cursor={Cursor.pointer}
      >
        Добавить
      </Text>
    </Flex>
  </Padding>
);
