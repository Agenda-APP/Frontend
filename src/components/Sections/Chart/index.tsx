import React, { FC } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { dataChart } from "./dataChart";

import { Width } from "../../UI/Section";

import { Section, Title } from "../../../components";
import { theme } from "../../../styles";
import { Variant } from "../../UI/Title";

export const Chart: FC = () => {
  return (
    <Section width={Width.small}>
      <Title variant={Variant.l}>График успеваемости</Title>
      <LineChart width={420} height={200} data={dataChart}>
        <CartesianGrid stroke="#f5f5f5" />
        <Line
          type="monotone"
          dataKey="grow"
          stroke={theme.colors.primary}
          yAxisId={0}
        />
        <XAxis
          axisLine={false}
          dataKey="day"
          fill={theme.colors.dark}
          style={{ fontSize: theme.fontSize.xs }}
          tickLine={false}
        />
        <YAxis
          fill={theme.colors.dark}
          style={{ fontSize: theme.fontSize.xs, padding: 0 }}
          axisLine={false}
          tickLine={false}
          width={15}
        />
      </LineChart>
    </Section>
  );
};
