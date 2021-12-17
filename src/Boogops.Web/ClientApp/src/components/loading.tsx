import { CircularProgress, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { FC } from "react";

const PREFIX = "Loading";

const classes = {
  content: `${PREFIX}-content`,
};

const StyledGrid = styled(Grid)(() => ({
  [`&.${classes.content}`]: {
    minHeight: "50vh",
  },
}));

const Loading: FC = () => {
  return (
    <StyledGrid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.content}
    >
      <Grid item>
        <CircularProgress />
      </Grid>
    </StyledGrid>
  );
};

export default Loading;
