import styled from "styled-components";

export const TaskWrapper = styled.li(({ theme }) => ({
  fontSize: theme.fontSize.s,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "1px solid rgba(40, 40, 70, 0.1)",
  padding: theme.sizes.s,
  borderRadius: "10px",
  marginBottom: theme.sizes.s,
  cursor: "pointer",
}));

export const Message = styled.div(({ theme }) => ({
  fontSize: theme.fontSize.m,
  padding: theme.sizes.xs,
  color: theme.colors.dark,
}));
