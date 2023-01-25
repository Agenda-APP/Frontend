import React, { FC } from "react";
import { Navigation, Tasks } from "../../components";
import { MainWrapperStyle } from "./style";

export const MainWrapper: FC = () => (
  <MainWrapperStyle>
    <Navigation />
    <div>
      <Tasks />
    </div>
  </MainWrapperStyle>
);
