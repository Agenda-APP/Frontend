import React, { FC } from "react";

import { FontSize, Text } from "../../../styles";

import { Section, Title } from "../../index";

import { Width } from "../../UI/Section";
import { Variant } from "../../UI/Title";

const paddingBottom = "10px";

export const Observation: FC = () => {
  return (
    <Section width={Width.small}>
      <Title variant={Variant.l}>Наблюдение</Title>
      <Text size={FontSize.s} padding={paddingBottom}>
        Больше всего задач вы создаете в Понедельник
      </Text>
      <Text size={FontSize.s} padding={paddingBottom}>
        Больше всего задач вы завершаете во Вторник
      </Text>
    </Section>
  );
};
