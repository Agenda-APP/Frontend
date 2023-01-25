import styled, { css } from "styled-components";
import { LineThrough } from "../Input";

interface InputStyleProps {
  lineThrough: LineThrough;
}

export const InputStyle = styled.input<InputStyleProps>(
  ({ theme, lineThrough }) => css`
    &:disabled {
      border: 0;
      color: \`${theme.colors.dark}\`;
      width: 100%;
      background: white;
      text-decoration: ${lineThrough};
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
