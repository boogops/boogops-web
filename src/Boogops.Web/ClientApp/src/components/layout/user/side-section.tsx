import React, { FC } from "react";
import { Divider, Drawer, Hidden, List, ListSubheader } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Dashboard } from "@mui/icons-material";

import RouterListItem from "../router-list-item";

const PREFIX = "SideSection";
const classes = {
  drawer: `${PREFIX}-drawer`,
  drawerPaper: `${PREFIX}-drawerPaper`,
  drawerHeader: `${PREFIX}-drawerHeader`,
  title: `${PREFIX}-title`,
};
const Root = styled("div")(({ theme }) => {
  const drawerWidth = 240;
  return {
    [`& .${classes.drawer}`]: {
      width: drawerWidth,
    },
    [`& .${classes.drawerPaper}`]: {
      width: drawerWidth,
    },
    [`& .${classes.drawerHeader}`]: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    [`& .${classes.title}`]: {
      flexGrow: 1,
      padding: theme.spacing(1, 0, 0, 1),
    },
  };
});

interface Props {
  drawerOpen: boolean;
  onDrawerToggle: (open: boolean) => void;
  selectedRoute: string;
  onRouteSelected: (route: string) => void;
}

const SideSection: FC<Props> = ({
  drawerOpen,
  onDrawerToggle,
  selectedRoute,
  onRouteSelected,
}: Props) => {
  const title = "Boogops";
  const subHeaderTitle = "Main";

  const drawer = (
    <>
      <div className={classes.drawerHeader}>
        <div className={classes.title}>{title}</div>
      </div>
      <Divider />
      <List>
        <ListSubheader>{subHeaderTitle}</ListSubheader>
        <RouterListItem
          to="/dashboard"
          primary="Dashboard"
          icon={<Dashboard />}
          selected={selectedRoute.includes("/dashboard")}
          onClick={() => onRouteSelected("/dashboard")}
        />
      </List>
    </>
  );

  return (
    <Root>
      <Hidden smDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smUp>
        <Drawer
          className={classes.drawer}
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
          open={drawerOpen}
          onClose={onDrawerToggle}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </Root>
  );
};

export default SideSection;
