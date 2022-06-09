import {
  alpha,
  AppBar,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
import React, { FC, useState } from "react";

const PREFIX = "TopSection";
const classes = {
  appBar: `${PREFIX}-appBar`,
  title: `${PREFIX}-title`,
  menuButton: `${PREFIX}-menuButton`,
};

const Root = styled("div")(({ theme }) => {
  const drawerWidth = 240;
  return {
    [`& .${classes.appBar}`]: {
      boxShadow: "none",
      backdropFilter: "blur(6px)",
      // Fix on Mobile
      WebkitBackdropFilter: "blur(6px)",
      backgroundColor: alpha(theme.palette.background.default, 0.72),
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    [`& .${classes.title}`]: {
      flexGrow: 1,
    },
    [`& .${classes.menuButton}`]: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  };
});

interface Props {
  onDrawerToggle: () => void;
}

const TopSection: FC<Props> = ({ onDrawerToggle }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleOpenMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const logout = "Logout";

  return (
    <Root>
      <AppBar elevation={1} className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} onClick={onDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Box className={classes.title} />
          <IconButton color="default" onClick={handleOpenMenu}>
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem>
              <Link href="/user/logout" underline="none">
                {logout}
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default TopSection;
