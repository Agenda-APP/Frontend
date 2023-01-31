import React, { FC } from "react";

import styled, { css } from "styled-components";

import SVG from "react-inlinesvg";

export const StyledSVG = styled(SVG)(
  ({ theme }) => css`
    path {
      fill: ${theme.colors.text};
    }
  `
);
interface ISvg {
  src: string;
  onClick?: () => void;
}
export const ImageSVG: FC<ISvg> = ({ src, onClick }) => (
  <StyledSVG src={src} onClick={onClick} />
);
