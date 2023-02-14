import styled, { css } from "styled-components";

export const Form = styled.form({
  display: "flex",
  flexDirection: "column",
});

export const Input = styled.input(({ theme }) => ({
  width: theme.width.full,
  padding: theme.sizes.xs,
  background: theme.colors.bg,
  border: theme.borders.borderTasks,
  borderRadius: theme.borders.s,
  color: theme.colors.text,
  marginBottom: theme.sizes.s,
}));

export const LinkAuth = styled.span(
  ({ theme }) => ({
    textDecoration: "underline",
    color: theme.colors.primary,
    cursor: "pointer",
    paddingLeft: theme.sizes.xs,
    transition: theme.animation.main,
  }),
  css`
    &:hover {
      opacity: 0.8;
    }
  `
);
