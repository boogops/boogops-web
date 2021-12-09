import { CircularProgress, Grid, makeStyles } from "@mui/material";
import React, { FC } from "react";

const useStyles = makeStyles(() => ({
  content: {
    minHeight: "50vh",
  },
}));

const Loading: FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.content}
    >
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Loading;
