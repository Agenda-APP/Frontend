import React, { FC } from "react";

import { Section, Title } from "../../index";
import { FontSize, Text } from "../../../styles";

import { Width } from "../../UI/Section";
import { Variant } from "../../UI/Title";

export const Fact: FC = () => (
  <Section width={Width.small}>
    <Title variant={Variant.l}>Факт дня</Title>
    <Text size={FontSize.s}>
      Человек, который просыпается в 6 утра, по статистике, закрывает все задачи
      к 18:00 вечера. Попробуем также 🤔?
    </Text>
  </Section>
);
