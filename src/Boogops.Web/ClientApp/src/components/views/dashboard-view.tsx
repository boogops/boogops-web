import { Grid } from "@mui/material";
import React, { FC } from "react";

const DashboardView: FC = () => {
  const title = "Hello, Heath!";
  return (
    <Grid container>
      <Grid item xs={12}>
        <span title={title} />
      </Grid>
    </Grid>
  );
};

export default DashboardView;
