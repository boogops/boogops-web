import React, { useMemo } from "react";
import {
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

import shape from "./shape";
import palette from "./palette";
import breakpoints from "./breakpoints";
import typography from "./typography";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";

type Props = React.PropsWithChildren<unknown>;

const ThemeConfig = ({ children }: Props) => {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette,
      shape,
      typography,
      shadows,
      customShadows,
      breakpoints,
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfig;
