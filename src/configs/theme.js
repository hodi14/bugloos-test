import { createTheme } from "@mui/material/styles";

const themeConfig = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      main: "#84A98C",
      light: "#eaf3e4",
    },

    secondary: {
      main: "#354F52",
    },

    background: {
      default: "#fff",
    },
  },

  components: {
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
    },
    MuiTextField: {
      defaultProps: {
        inputProps: {
          autoComplete: "off",
        },
      },
    },

    MuiDrawer: {
      defaultProps: {
        keepMounted: false,
      },
    },

    // custum button styles
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: "1rem",
          color: "white",
          boxShadow: "none !important",
          fontSize: "0.75rem  ",
          fontWeight: "600",
          height: "2.5rem",
        },
        secondary: {
          background: "#fff",
          borderRadius: "1rem",
          boxShadow: "none !important",
          color: "#f80",
          height: "2.5rem",
        },
        outlined: {
          color: "#354F52",
          border: `1px solid #354F52`,
          borderRadius: "1rem",
          fontSize: "0.75rem  ",
          fontWeight: "600",
          height: "2.5rem",
        },

        text: {
          backgroundColor: "transparent !important",
          boxShadow: "none",
          color: "#354F52",
          fontSize: "0.75rem  ",
          fontWeight: "600",
          height: "2.5rem",
        },
      },
    },
  },
});

export default themeConfig;
