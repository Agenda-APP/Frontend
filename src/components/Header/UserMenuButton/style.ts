import styled, { css } from "styled-components";

export const MenuButton = styled.div(
  ({ theme }) =>
    css`
      box-shadow: ${theme.boxShadow.global};
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-left: ${theme.sizes.xs};
      border-radius: ${theme.borders.s};
      transition: ${theme.animation.main};
      &:hover {
        transform: scale(1.3);
      }
    `
);
