import styled, { css } from "styled-components";
import { WidthInput } from "./index";
import { calendar } from "../../../../assets";

interface InputStyledType {
  width: WidthInput;
}

export const InputStyled = styled.input<InputStyledType>(
  ({ theme, width }) => ({
    width: width,
    border: theme.borders.borderTasks,
    padding: theme.sizes.xs,
    background: theme.colors.bg,
    borderRadius: theme.borders.s,
    color: theme.colors.text,
    cursor: "pointer",
    fontSize: theme.fontSize.m,
    marginTop: theme.sizes.s,
    marginBottom: theme.sizes.s,
  }),
  ({ theme }) =>
    css`
      &::-webkit-calendar-picker-indicator {
        opacity: 1;
        display: block;
        background: url(${calendar}) no-repeat;
        width: 20px;
        height: 20px;
        svg {
          path {
            stroke: ${theme.colors.text};
          }
        }
      }
    `
);
