import React, { FC } from "react";
import { Navigation, Tasks } from "../../components";
import { Grid } from "./style";

export const Layout: FC = () => {
  return (
    <Grid>
      <Navigation />
      <div>
        <Tasks />
      </div>
    </Grid>
  );
};
