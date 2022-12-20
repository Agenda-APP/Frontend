import styled from "styled-components";

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
  fontWeight: {
    s: 400,
    m: 600,
  },
  fontSize: {
    s: "12px",
    m: "14px",
    l: "16px",
    title: "18px",
  },
  boxShadow: {
    global: "0px 10px 25px rgba(29, 52, 54, 0.08)",
  },
  animation: {
    main: "all 0.3ms ease",
  },
};
interface IFlex {
  cursor?: string;
  direction?: string;
  align?: string;
  padding?: string;
}
export const Flex = styled.div<IFlex>`
  display: flex;
  align-items: ${(props) => props.align || "center"};
  cursor: ${(props) => props.cursor || "default"};
  flex-direction: ${(props) => props.direction || "row"};
  padding: ${(props) => props.padding || "0"};
`;
