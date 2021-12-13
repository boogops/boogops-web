declare module "@mui/material/styles" {
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
