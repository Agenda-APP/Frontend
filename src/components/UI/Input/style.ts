import styled, { css } from "styled-components";
import { Line } from "../Input";

interface InputStyleProps {
  line: Line;
}

export const InputStyle = styled.input<InputStyleProps>(
  ({ theme, line }) => css`
    &:disabled {
      border: 0;
      color: \`${theme.colors.dark}\`;
      width: 100%;
      background: white;
      text-decoration: ${line};
    }
    &:enabled,
    &:focus-visible {
      padding: 5px;
      color: \`${theme.colors.dark}\`;
      width: 100%;
      border: 2px solid \`${theme.colors.primary}\`;
    }
  `
);
