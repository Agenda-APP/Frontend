import styled from "styled-components";

export enum PaddingSizes {
  xs = "15px",
  s = "20px",
  m = "25px",
  l = "35px",
}

interface IPadding {
  top?: PaddingSizes;
  bottom?: PaddingSizes;
  right?: PaddingSizes;
  left?: PaddingSizes;
}
export const Padding = styled.div<IPadding>`
  padding-top: ${(props) => props.top || "0"};
  padding-bottom: ${(props) => props.bottom || "0"};
  padding-right: ${(props) => props.right || "0"};
  padding-left: ${(props) => props.left || "0"};
`;
