import styled from "styled-components";
import { Width } from "./index";

interface ISectionStyle {
  width: Width;
}

export const SectionStyle = styled.section<ISectionStyle>(
  ({ theme, width }) => ({
    width: width,
    padding: theme.sizes.m,
    boxShadow: theme.boxShadow.global,
    background: "white",
    borderRadius: theme.sizes.s,
    margin: theme.sizes.s,
  })
);
