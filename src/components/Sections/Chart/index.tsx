import React, { FC } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { dataChart } from "./dataChart";

import { Width } from "../../UI/Section";

import { Section, Title } from "../../../components";

import { VariantSize } from "../../UI/Title";
import { newTheme } from "../../../styles/theme";
import { useAppSelector } from "../../../hooks/redux";

export const Chart: FC = () => {
  const { theme } = useAppSelector((state) => state.themeToggle);

  return (
    <Section width={Width.small}>
      <Title variant={VariantSize.l}>График успеваемости</Title>
      <LineChart width={420} height={200} data={dataChart}>
        <CartesianGrid stroke="#f5f5f5" />
        <Line
          type="monotone"
          dataKey="grow"
          stroke={newTheme(theme).colors.primary}
          yAxisId={0}
        />
        <XAxis
          dataKey="day"
          style={{ fontSize: newTheme(theme).fontSize.s }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          style={{ fontSize: newTheme(theme).fontSize.s }}
          axisLine={false}
          tickLine={false}
          width={20}
        />
      </LineChart>
    </Section>
  );
};
