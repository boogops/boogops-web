import React, { PropsWithChildren, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  styled,
  Box,
  Link,
  Drawer,
  Typography,
  Avatar,
  Hidden,
} from "@mui/material";

import { NavSection, Scrollbar } from "../../components";

import sidebarConfig from "./sidebar-config";

const DRAWER_WIDTH = 280;
const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200],
}));

type Props = PropsWithChildren<{
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
}>;

const DashboardSidebar = ({ isOpenSidebar, onCloseSidebar }: Props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={RouterLink} to="/" sx={{ display: "inline-flex" }}>
          {/* Logo goes here.*/}
        </Box>
      </Box>
      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src="" alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.primary" }}
                title="Heath Turnage"
              />
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                title="Primary Software Developer"
              />
            </Box>
          </AccountStyle>
        </Link>
      </Box>
      <NavSection navConfig={sidebarConfig} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      <Hidden lgUp>
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
            },
          }}
        >
          {renderContent}
        </Drawer>
      </Hidden>
    </RootStyle>
  );
};

export default DashboardSidebar;
