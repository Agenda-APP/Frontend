import React, { FC } from "react";
import styled from "styled-components";

export const TitleMenuStyle = styled.h2(({ theme }) => ({
  fontWeight: theme.fontWeight.m,
  fontSize: theme.fontSize.title,
  lineHeight: "22px",
  letterSpacing: "0.03em",
  color: theme.colors.primary,
}));

interface ITitleMenu {
  children: string;
}
export const TitleMenu: FC<ITitleMenu> = ({ children }) => {
  return <TitleMenuStyle>{children}</TitleMenuStyle>;
};
