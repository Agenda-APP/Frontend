import React, { FC } from "react";
import { Section, Title } from "../../index";

import { Width } from "../../UI/Section";
import { Variant } from "../../UI/Title";

import { TimeText } from "./style";
import { Flex, FlexValue, FontSize, Text } from "../../../styles";

import { Calendar, Clock } from "../../../assets";

const paddingBottom = "10px";

export const Time: FC = () => {
  return (
    <Section width={Width.small}>
      <Title variant={Variant.l}>Такс такс такс</Title>
      <Flex justify={FlexValue.between}>
        <div>
          <Text size={FontSize.s} padding={paddingBottom}>
            На часах у нас
          </Text>
          <Flex>
            <Calendar /> <TimeText>12:33:40</TimeText>
          </Flex>
        </div>
        <div>
          <Text size={FontSize.s} padding={paddingBottom}>
            На часах у нас
          </Text>
          <Flex>
            <Clock /> <TimeText>5 апреля 2021</TimeText>
          </Flex>
        </div>
      </Flex>
    </Section>
  );
};
