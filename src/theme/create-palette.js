import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
import { error, indigo, info, neutral, success, warning } from "./colors";

export function createPalette(mode) {
  return {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12),
    },
    ...(mode === "dark" && {
      mode: "dark",
      background: {
        default: "#121212",
        paper: "#121212",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      text: {
        primary: "#fff",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
      },
    }),
    ...(mode != "dark" && {
      mode: "light",
      background: {
        default: common.white,
        paper: common.white,
      },
      divider: "#F2F4F7",
      text: {
        primary: neutral[900],
        secondary: neutral[500],
        disabled: alpha(neutral[900], 0.38),
      },
    }),
    error,
    info,

    neutral,
    primary: {
      ...info,
      ...(mode === "dark" && {
        main: info.dark,
      }),
    },
    success,

    warning,
  };
}
