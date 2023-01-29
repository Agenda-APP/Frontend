import React, { FC } from "react";

import { Flex, FlexValue } from "../../styles";
import { Variant } from "../UI/Button/Button";

import { ReactComponent as Plus } from "../../assets/plus.svg";

import { UserHeader, ImageTheme, Button } from "../../components";

export const Header: FC = () => {
  return (
    <Flex justify={FlexValue.between}>
      <Button variant={Variant.primary}>
        <Flex justify={FlexValue.between}>
          <Plus />
          <span>Новая задача</span>
        </Flex>
      </Button>
      <ImageTheme />
      <UserHeader />
    </Flex>
  );
};
