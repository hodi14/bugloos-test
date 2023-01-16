import { makeStyles } from "@mui/styles";

import background from "../../assets/images/background.png";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.light,
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 100%",
    backgroundSize: "50%",
    height: "50vh",
    padding: "3rem 0.5rem",
    minHeight: "30rem",

    [theme.breakpoints.down("sm")]: {
      backgroundSize: "contain",
      height: "100vh",
    },
  },

  social: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.main,
    padding: "0.25rem",
    zIndex: "100",

    "& > a": {
      display: "flex",
      alignItems: "center",
      color: "#fff",

      "& .MuiSvgIcon-root": {
        fontSize: "1.25rem",
        marginRight: "0.25rem",
      },
    },
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.primary.light,
    boxShadow: "0 0 8px 0px #cad2c5",
    borderRadius: "1rem",
    margin: "0.5rem auto",
    padding: "0.5rem",
    maxWidth: "768px",

    "& > a": {
      color: theme.palette.secondary.main,
    },

    "& .MuiButton-root a": {
      color: "#fff",
    },
  },
}));

export default useStyles;
