import React, { FC, useCallback, useEffect } from "react";
import { styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Outlet } from "react-router-dom";

import { StoreState, setDrawerOpen, setSelectedRoute } from "../../../store";

import ContentSection from "./content-section";
import SideSection from "./side-section";
import TopSection from "./top-section";

const PREFIX = "UserLayout";
const classes = {
  root: `${PREFIX}-root`,
};
const Root = styled("div")(() => ({
  [`&.${classes.root}`]: {
    display: "flex",
  },
}));

const UserLayout: FC = () => {
  const location = useLocation();

  const drawerOpen = useSelector(
    (state: StoreState) => state.layout.drawerOpen
  );
  const selectedRoute = useSelector(
    (state: StoreState) => state.layout.selectedRoute
  );

  const dispatch = useDispatch();

  function handleDrawerToggle() {
    dispatch(setDrawerOpen(!drawerOpen));
  }

  const handleRouteSelection = useCallback(
    (route: string) => {
      dispatch(setSelectedRoute(route));
      dispatch(setDrawerOpen(false));
    },
    [dispatch]
  );

  useEffect(
    () => handleRouteSelection(location.pathname),
    [handleRouteSelection, location.pathname]
  );

  return (
    <Root className={classes.root}>
      <SideSection
        drawerOpen={drawerOpen}
        onDrawerToggle={handleDrawerToggle}
        selectedRoute={selectedRoute}
        onRouteSelected={handleRouteSelection}
      />
      <TopSection title="Boogops" onDrawerToggle={handleDrawerToggle} />
      <ContentSection>
        <Outlet />
      </ContentSection>
    </Root>
  );
};

export default UserLayout;
