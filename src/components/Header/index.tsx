import React, { FC } from "react";

import { Flex, FlexValue } from "../../styles";
import { Variant } from "../UI/Button/Button";

import { ReactComponent as Plus } from "../../assets/plus.svg";

import { UserHeader, ImageTheme, Button } from "../../components";
import { useAppDispatch } from "../../hooks/redux";
import { toggleModal } from "../../store/modalSlice";

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Flex justify={FlexValue.between}>
      <Button
        variant={Variant.primary}
        onClick={() => dispatch(toggleModal(true))}
      >
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
