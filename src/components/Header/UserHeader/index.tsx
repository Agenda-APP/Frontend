import React, { FC } from "react";
import {
  Flex,
  FlexValue,
  FontSize,
  Text,
  theme,
  WeightText,
} from "../../../styles";

import { currentUser } from "./mock";

import { Avatar, UserMenuButton } from "../../../components";

export const UserHeader: FC = () => {
  return (
    <Flex justify={FlexValue.between}>
      <Text
        size={FontSize.m}
        weight={WeightText.m}
        paddingRight={theme.sizes.xs}
      >
        Хорошего дня, {currentUser.userName}
      </Text>
      <Avatar img={currentUser.img} />
      <UserMenuButton />
    </Flex>
  );
};
