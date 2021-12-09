import {
  CircularProgress,
  Fab,
  makeStyles,
  Theme,
  withStyles,
} from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import React, { FC } from "react";
import { useSelector } from "react-redux";

import { StoreState } from "../../../store";

export const WhiteCircularProgress = withStyles((theme) => ({
  colorPrimary: {
    color: theme.palette.common.white,
  },
}))(CircularProgress);

const useStyles = makeStyles((theme: Theme) => ({
  drawerHeader: {
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

type Props = React.PropsWithChildren<unknown>;

const ContentSection: FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { children } = props;

  const loading = useSelector((state: StoreState) => state.layout.loading);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <div className={classes.content}>
        <div id="top-anchor" className={classes.drawerHeader} />
        {children}
      </div>
      <div onClick={handleClick} className={classes.fab}>
        <Fab color="primary">
          {loading ? <WhiteCircularProgress /> : <KeyboardArrowUp />}
        </Fab>
      </div>
    </>
  );
};

export default ContentSection;
