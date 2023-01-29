import styled, { css } from "styled-components";

export const MainWrapperStyle = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: ${theme.width.navigation} ${theme.width.main};
    gap: 70px;
  `
);
