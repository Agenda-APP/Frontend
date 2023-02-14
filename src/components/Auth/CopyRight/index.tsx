import React, { FC } from "react";

import { CopyRightStyle } from "./style";
import { StyledSVG } from "../style";
import { Text } from "../../../styles";

import { copyRight } from "../../../assets";

export const CopyRight: FC = () => {
  return (
    <CopyRightStyle>
      <StyledSVG src={copyRight} />
      <Text>copyright 2021</Text>
      <Text>Политика конфиденциальности</Text>
    </CopyRightStyle>
  );
};
