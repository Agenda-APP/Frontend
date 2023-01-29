import React, { FC } from "react";
import { Section, Title } from "../../index";

import { Width } from "../../UI/Section";
import { Variant } from "../../UI/Title";

import { TimeText } from "./style";
import { Flex, FlexValue, FontSize, Text, theme } from "../../../styles";

import { Calendar, Clock } from "../../../assets";

import { useSetTime } from "./useSetTime";
import { useSetDate } from "./useSetDate";

export const Time: FC = () => {
  const dateTime = useSetTime();
  const date = useSetDate();
  return (
    <Section width={Width.small}>
      <Title variant={Variant.l}>Такс такс такс</Title>
      <Flex justify={FlexValue.between}>
        <div>
          <Text size={FontSize.s} paddingBottom={theme.sizes.xs}>
            На часах у нас
          </Text>
          <Flex>
            <Calendar /> <TimeText>{dateTime}</TimeText>
          </Flex>
        </div>
        <div>
          <Text size={FontSize.s} paddingBottom={theme.sizes.xs}>
            А сегодня у нас
          </Text>
          <Flex>
            <Clock />
            <TimeText>{date}</TimeText>
          </Flex>
        </div>
      </Flex>
    </Section>
  );
};
