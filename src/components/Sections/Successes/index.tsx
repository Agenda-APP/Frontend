import React, { FC } from "react";

import { Section, Title, TaskCount } from "../../../components";

import { VariantSize } from "../../UI/Title";

import { dataCountTasks } from "./dataCountTasks";
import { Flex, FlexValue } from "../../../styles";

export const Successes: FC = () => {
  const renderInfoTasks = dataCountTasks.map((infoTask) => (
    <TaskCount key={infoTask.id} {...infoTask} />
  ));

  return (
    <Section>
      <Title variant={VariantSize.l}>Успехи за неделю</Title>
      <Flex justify={FlexValue.between}>{renderInfoTasks}</Flex>
    </Section>
  );
};
