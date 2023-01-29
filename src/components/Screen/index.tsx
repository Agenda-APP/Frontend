import React, { FC } from "react";

import {
  Chart,
  Fact,
  Navigation,
  Observation,
  Successes,
  Tasks,
  Time,
  Header,
} from "../../components";

import { MainWrapperStyle } from "./style";
import { Flex, FlexValue, Padding, PaddingSizes } from "../../styles";

export const Screen: FC = () => (
  <MainWrapperStyle>
    <Navigation />
    <Padding top={PaddingSizes.xs}>
      <Header />
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
    </Padding>
  </MainWrapperStyle>
);
