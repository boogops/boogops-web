import { styled } from "@mui/material/styles";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Outlet } from "react-router-dom";

import { StoreState } from "../../../store";
import { setDrawerOpen, setSelectedRoute } from "../../../store/layout";

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

  function handleRouteSelection(route: string) {
    dispatch(setSelectedRoute(route));
    dispatch(setDrawerOpen(false));
  }

  useEffect(() => handleRouteSelection(location.pathname), [location.pathname]);

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
