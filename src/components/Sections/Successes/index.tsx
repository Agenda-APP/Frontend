import React, { FC } from "react";

import { Section, Title, TaskCount } from "../../../components";

import { Variant } from "../../UI/Title";

import { date } from "./date";
import { Flex, FlexValue } from "../../../styles";

export const Successes: FC = () => {
  return (
    <Section>
      <Title variant={Variant.l}>Успехи за неделю</Title>
      <Flex justify={FlexValue.between}>
        {date.map((infoTask) => (
          <TaskCount key={infoTask.id} {...infoTask} />
        ))}
      </Flex>
    </Section>
  );
};
