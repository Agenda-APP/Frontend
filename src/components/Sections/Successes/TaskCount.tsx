import React, { FC } from "react";

import { Border, Count, Wrap } from "./style";

import { WeightText, Text } from "../../../styles";

interface ITaskCount {
  title: string;
  count: number;
}

export const TaskCount: FC<ITaskCount> = ({ title, count }) => {
  return (
    <Wrap>
      <Text weight={WeightText.m}>{title}</Text>
      <Border>
        <Count>{count}</Count>
        <Text>задач</Text>
      </Border>
    </Wrap>
  );
};
