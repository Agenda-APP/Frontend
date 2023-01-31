import React, { FC } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { dataChart } from "./dataChart";

import { Width } from "../../UI/Section";

import { Section, Title } from "../../../components";

import { Variant } from "../../UI/Title";

export const Chart: FC = () => {
  return (
    <Section width={Width.small}>
      <Title variant={Variant.l}>График успеваемости</Title>
      <LineChart width={420} height={200} data={dataChart}>
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="grow" stroke="#29A19C" yAxisId={0} />
        <XAxis
          dataKey="day"
          fill="#2C3440"
          style={{ fontSize: "15px" }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          fill="#2C3440"
          style={{ fontSize: "15px" }}
          axisLine={false}
          tickLine={false}
          width={20}
        />
      </LineChart>
    </Section>
  );
};
