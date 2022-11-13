import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  direction?: string;
  children: ReactNode;
  align?: string;
  justify?: string;
  margin?: string;
  padding?: string;
  background?: string;
  width?: string;
  toggle?: boolean;
};

const FlexStyled = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  background: ${(props) =>
    props.toggle ? props.background || "#21262f" : "white"};
  width: ${({ width }) => width || "auto"};
  p,
  p span {
    color: ${(props) => (props.toggle ? "white" : "black")};
  }
`;

const Flex: FC<Props> = (props) => {
  return <FlexStyled {...props} />;
};

export default Flex;
