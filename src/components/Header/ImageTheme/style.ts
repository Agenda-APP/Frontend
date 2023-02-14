import styled, { css } from "styled-components";

export const Image = styled.img(
  ({ theme }) => ({
    cursor: "pointer",
    transition: theme.animation.main,
  }),
  css`
    &:hover {
      transform: scale(1.1);
    }
  `
);
