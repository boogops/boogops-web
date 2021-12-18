import {
  AppBar,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Typography,
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
  title: string;
  onDrawerToggle: () => void;
}

const TopSection: FC<Props> = ({ title, onDrawerToggle }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleOpenMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Root>
      <AppBar position="fixed" elevation={1} className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={onDrawerToggle}
            className={classes.menuButton}
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <IconButton color="inherit" onClick={handleOpenMenu} size="large">
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem>
              <Link
                title="Logout"
                href="/user/logout"
                underline="none"
                color="inherit"
              />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default TopSection;
