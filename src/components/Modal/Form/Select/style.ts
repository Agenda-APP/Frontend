import styled from "styled-components";

export const SelectStyle = styled.select(({ theme }) => ({
  border: theme.borders.borderTasks,
  padding: theme.sizes.xs,
  color: theme.colors.text,
  width: "200px",
  borderRadius: theme.borders.s,
  background: theme.colors.bg,
  marginTop: theme.sizes.s,
  marginBottom: theme.sizes.s,
  fontSize: theme.fontSize.m,
}));
