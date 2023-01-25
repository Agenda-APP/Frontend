import React, { FC } from "react";

import {
  Navigation,
  Tasks,
  Successes,
  Time,
  Observation,
  Fact,
  Chart,
} from "../../components";

import { MainWrapperStyle } from "./style";
import { Flex, FlexValue } from "../../styles";

export const Screen: FC = () => (
  <MainWrapperStyle>
    <Navigation />
    <div>
      <Flex align={FlexValue.stretch} justify={FlexValue.between}>
        <div>
          <Successes />
          <Tasks />
        </div>
        <div>
          <Time />
          <Observation />
          <Fact />
          <Chart />
        </div>
      </Flex>
    </div>
  </MainWrapperStyle>
);
