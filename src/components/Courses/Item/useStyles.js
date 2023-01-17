import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  courseItem: {
    "&.MuiCard-root": {
      display: "flex",
      flexDirection: "column",
      borderRadius: "1rem",
      backgroundColor: theme.palette.primary.light,
      boxShadow: "none",
      height: "100%",
      padding: "0.5rem",
      transition: "0.4s",

      "&:hover": {
        boxShadow: "0 0 8px 0px #cad2c5",
      },
    },

    "& .MuiCardMedia-root": {
      backgroundColor: "#eee",
      borderRadius: "1rem",
      height: "calc(50vw - 4rem)",
      maxHeight: "14rem",

      [theme.breakpoints.down("sm")]: {
        height: "calc(100vw - 2rem)",
      },
    },

    "& .MuiCardActions-root": {
      justifyContent: "space-between",
      padding: "0.5rem 0",

      "& .MuiTypography-root": {
        display: "flex",
        alignItems: "center",
        color: theme.palette.secondary.main,
        fontWeight: "bold",
        lineHeight: "2rem",
      },
    },

    "& .MuiCardContent-root": {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      padding: "0 0 0.5rem !important",

      "& > .MuiGrid-root": {
        padding: "0.5rem 0",
        "& *": {
          color: theme.palette.secondary.main,
          fontWeight: "bold",
        },
      },
    },
  },

  courseInfoBackground: {
    borderRadius: "1rem",
    backgroundColor: theme.palette.secondary.main,
    margin: "auto 0 0",
    padding: "1rem 0.5rem !important",

    "& *": {
      color: "#fff !important",
    },

    "& .MuiGrid-root": {
      position: "relative",
      display: "flex",
      overflow: "hidden",
      width: ({ rating }) => `${(rating / 5) * 100}%`,
    },
  },
}));

export default useStyles;
