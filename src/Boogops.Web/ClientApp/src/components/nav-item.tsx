import React from "react";
import { alpha, styled, useTheme } from "@mui/material/styles";
import { NavLink as RouterLink } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

const ListItemStyled = styled(ListItem)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  "&:before": {
    top: 0,
    right: 0,
    width: 3,
    bottom: 0,
    content: "''",
    display: "none",
    position: "absolute",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

const ListItemIconStyled = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

interface Props {
  item: { title: string; path: string; icon: JSX.Element };
  active: (path: string) => boolean;
}

const NavItem = ({ item, active }: Props) => {
  const theme = useTheme();
  const isActiveRoot = active(item.path);
  const { title, path, icon } = item;

  const activeRootStyle = {
    color: "primary.main",
    fontWeight: "fontWeightMedium",
    bgcolor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
    "&:before": { display: "block" },
  };

  return (
    <ListItemStyled
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
      disableGutters
    >
      <ListItemIconStyled>{icon && icon}</ListItemIconStyled>
      <ListItemText disableTypography primary={title} />
    </ListItemStyled>
  );
};

export default NavItem;
