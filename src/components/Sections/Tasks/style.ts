import styled, { css } from "styled-components";

export const TaskWrapper = styled.li(
  ({ theme }) => ({
    fontSize: theme.fontSize.s,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: theme.borders.borderTasks,
    padding: theme.sizes.s,
    borderRadius: "10px",
    marginBottom: theme.sizes.s,
    cursor: "pointer",
  }),
  css`
    svg {
      rect {
        fill: ${(props) => props.theme.colors.text};
      }
    }
  `
);

export const Message = styled.div(({ theme }) => ({
  fontSize: theme.fontSize.m,
  padding: theme.sizes.xs,
  color: theme.colors.text,
}));
