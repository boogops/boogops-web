const Card = (theme: any) => ({
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: theme.customShadows.z16,
        borderRadius: theme.shape.borderRadiusMd,
        position: "relative",
        // Fix Safari overflow: hidden with border radius
        zIndex: 0,
      },
    },
  },
  MuiCardHeader: {
    defaultProps: {
      titleTypographyProps: { variant: "h6" },
      subheaderTypographyProps: { variant: "body2" },
    },
    styleOverrides: {
      root: {
        padding: theme.spacing(3, 3, 0),
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: theme.spacing(3),
      },
    },
  },
});

export default Card;
