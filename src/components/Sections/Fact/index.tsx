import React, { FC } from "react";

import { Section, Title } from "../../index";
import { FontSize, Text } from "../../../styles";

import { Width } from "../../UI/Section";
import { VariantSize } from "../../UI/Title";
import { factOfDay } from "./mock";

export const Fact: FC = () => (
  <Section width={Width.small}>
    <Title variant={VariantSize.l}>Факт дня</Title>
    <Text size={FontSize.s}>{factOfDay}</Text>
  </Section>
);
