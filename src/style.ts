import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  boxSizing: "border-box";
    body{
      height: 100%;
    }
    a{
      text-decoration: none;
      color: inherit;
    }
    ul{
      list-style-type: none;
      padding: 0;
    }
    button{
      cursor: pointer;
      border: none;
      background: none;
    }
}
`;

export const theme = {
  colors: {
    primary: "#29A19C",
    secondary: "#222831",
    warning: "#F05454",
  },
  borders: {
    s: 4,
    m: 8,
    l: 12,
    round: "100%",
  },
};
interface IFlex {
  cursor?: string;
  direction?: string;
  align?: string;
}
export const Flex = styled.div<IFlex>`
  display: flex;
  align-items: ${(props) => props.align || "center"};
  cursor: ${(props) => props.cursor || "default"};
  flex-direction: ${(props) => props.direction || "row"};
`;

export const SpanText = styled.span`
  color: ${(props) => props.color || theme.colors.secondary};
  margin-left: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.025em;
`;
