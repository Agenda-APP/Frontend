import styled from "styled-components";
import { theme } from "../../styles/style";

export const LogoName = styled.p({
  fontWeight: theme.fontWeight.m,
  fontSize: theme.fontSize.title,
  lineHeight: "22px",
  letterSpacing: "0.03em",
  color: theme.colors.primary,
  paddingLeft: 7,
  width: "100px",
});
