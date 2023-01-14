import styled from "styled-components";

export const TitleMenuStyle = styled.h2(({ theme }) => ({
  fontWeight: theme.fontWeight.m,
  fontSize: theme.fontSize.title,
  color: theme.colors.primary,
}));
