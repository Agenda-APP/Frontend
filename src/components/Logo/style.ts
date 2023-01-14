import styled from "styled-components";

export const LogoName = styled.p(({ theme }) => ({
  fontWeight: theme.fontWeight.m,
  fontSize: theme.fontSize.title,
  color: theme.colors.primary,
  paddingLeft: 7,
  width: "70px",
}));
