import React from "react";
import { matchPath, useLocation } from "react-router-dom";
import { List } from "@mui/material";

import sidebarConfig from "../layouts/dashboard/sidebar-config";

import NavItem from "./nav-item";

interface NavSectionProps {
  navConfig: typeof sidebarConfig;
}

const NavSection = ({ navConfig }: NavSectionProps) => {
  const { pathname } = useLocation();
  const match = (path: string) =>
    path ? Boolean(matchPath({ path, end: false }, pathname)) : false;

  return (
    <List disablePadding>
      {navConfig.map(
        (item: { title: string; path: string; icon: JSX.Element }) => (
          <NavItem key={item.title} item={item} active={match} />
        )
      )}
    </List>
  );
};

export default NavSection;
