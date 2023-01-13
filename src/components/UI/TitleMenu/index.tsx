import React, { FC } from "react";
import { TitleMenuStyle } from "./style";

interface ITitleMenu {
  children: string;
}
export const TitleMenu: FC<ITitleMenu> = ({ children }) => {
  return <TitleMenuStyle>{children}</TitleMenuStyle>;
};
