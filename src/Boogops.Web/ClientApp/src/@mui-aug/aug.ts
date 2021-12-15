import { customShadows } from "../theme/shadows";
import { GREY } from "../theme/palette";

declare module "@mui/material" {
  interface Theme {
    customShadows: typeof customShadows;
  }
  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
}

declare module "@mui/system/createTheme/shape" {
  interface Shape {
    borderRadiusSm: number | string;
    borderRadiusMd: number | string;
  }
}

export {};
