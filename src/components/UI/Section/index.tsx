import React, { FC, ReactNode } from "react";

import { SectionStyle } from "./style";

export enum Width {
  form = "350px",
  small = "472px",
  middle = "566px",
}

interface ISection {
  children: ReactNode;
  width?: Width;
}
export const Section: FC<ISection> = ({ children, width = Width.middle }) => {
  return <SectionStyle width={width}>{children}</SectionStyle>;
};
