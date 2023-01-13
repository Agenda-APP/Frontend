import styled from "styled-components";

export enum FlexValue {
  stretch = "stretch",
  column = "column",
}
interface IFlex {
  cursor?: string;
  direction?: FlexValue;
  align?: FlexValue;
}
export const Flex = styled.div<IFlex>`
  display: flex;
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => props.direction || "row"};
`;
