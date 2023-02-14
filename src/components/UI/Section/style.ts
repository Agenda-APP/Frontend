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
    background: theme.colors.bg,
    borderRadius: theme.sizes.s,
    marginBottom: theme.sizes.m,
    marginTop: theme.sizes.m,
    alignSelf: "center",
  })
);
