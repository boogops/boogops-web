import { CircularProgress, Grid, styled } from "@mui/material";
import React, { FC } from "react";

const PREFIX = "Loading";
const classes = {
  content: `${PREFIX}-content`,
};
const Root = styled("div")(() => ({
  [`&.${classes.content}`]: {
    minHeight: "50vh",
  },
}));

const Loading: FC = () => {
  return (
    <Root>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.content}
      >
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    </Root>
  );
};

export default Loading;
