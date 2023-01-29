import React, { FC } from "react";

import { FontSize, Text, theme } from "../../../styles";

import { Section, Title } from "../../index";

import { Width } from "../../UI/Section";
import { Variant } from "../../UI/Title";
import { outputByTasks } from "./mock";

export const Observation: FC = () => {
  const renderOutputByTasks = outputByTasks.map(({ body, id }) => (
    <Text key={id} size={FontSize.s} paddingBottom={theme.sizes.xs}>
      {body}
    </Text>
  ));
  return (
    <Section width={Width.small}>
      <Title variant={Variant.l}>Наблюдение</Title>
      {renderOutputByTasks}
    </Section>
  );
};
