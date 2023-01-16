import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  courseItem: {
    "&.MuiCard-root": {
      borderRadius: "1rem",
      backgroundColor: theme.palette.primary.light,
      boxShadow: "none",
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

      [theme.breakpoints.down("xs")]: {
        height: "calc(100vw - 2rem)",
      },
    },

    "& .MuiCardContent-root": {
      padding: "0.5rem 0 !important",
    },
  },

  courseInfoBackground: {
    borderRadius: "1rem",
    backgroundColor: theme.palette.secondary.main,
    padding: "0.5rem",

    "& *": {
      color: "#fff !important",
    },
  },
}));

export default useStyles;
