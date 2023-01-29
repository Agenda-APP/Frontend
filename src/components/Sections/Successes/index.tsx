import React, { FC } from "react";

import { Section, Title, TaskCount } from "../../../components";

import { Variant } from "../../UI/Title";

import { dataCountTasks } from "./dataCountTasks";
import { Flex, FlexValue } from "../../../styles";

export const Successes: FC = () => {
  const renderInfoTasks = dataCountTasks.map((infoTask) => (
    <TaskCount key={infoTask.id} {...infoTask} />
  ));

  return (
    <Section>
      <Title variant={Variant.l}>Успехи за неделю</Title>
      <Flex justify={FlexValue.between}>{renderInfoTasks}</Flex>
    </Section>
  );
};
