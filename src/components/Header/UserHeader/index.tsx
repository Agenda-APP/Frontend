import React, { FC } from "react";
import {
  Flex,
  FlexValue,
  FontSize,
  Text,
  WeightText,
  PaddingValue,
} from "../../../styles";

import { currentUser } from "./mock";

import { Avatar, UserMenuButton } from "../../../components";

export const UserHeader: FC = () => {
  return (
    <Flex justify={FlexValue.between}>
      <Text
        size={FontSize.m}
        weight={WeightText.m}
        paddingRight={PaddingValue.xs}
      >
        Хорошего дня, {currentUser.userName}
      </Text>
      <Avatar img={currentUser.img} />
      <UserMenuButton />
    </Flex>
  );
};
