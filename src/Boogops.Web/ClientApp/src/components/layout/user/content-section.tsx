import { CircularProgress, Fab, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { KeyboardArrowUp } from "@mui/icons-material";
import React, { FC } from "react";
import { useSelector } from "react-redux";

import { StoreState } from "../../../store";

const PREFIX = "ContentSection";
const classes = {
  colorPrimary: `${PREFIX}-colorPrimary`,
  drawerHeader: `${PREFIX}-drawerHeader`,
  content: `${PREFIX}-content`,
  fab: `${PREFIX}-fab`,
};
const Root = styled("div")(({ theme }) => ({
  [`& .${classes.drawerHeader}`]: {
    ...theme.mixins.toolbar,
  },
  [`& .${classes.content}`]: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  [`& .${classes.fab}`]: {
    position: "fixed",
    bottom: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

const WhiteCircularProgress = styled(CircularProgress)(({ theme }) => ({
  [`& .${classes.colorPrimary}`]: {
    color: theme.palette.common.white,
  },
}));

type Props = React.PropsWithChildren<unknown>;

const ContentSection: FC<Props> = (props: Props) => {
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
    <Root>
      <div className={classes.content}>
        <div id="top-anchor" className={classes.drawerHeader} />
        {children}
      </div>
      <div onClick={handleClick} className={classes.fab}>
        <Fab color="primary">
          {loading ? (
            <WhiteCircularProgress
              classes={{
                colorPrimary: classes.colorPrimary,
              }}
            />
          ) : (
            <KeyboardArrowUp />
          )}
        </Fab>
      </div>
    </Root>
  );
};

export default ContentSection;
