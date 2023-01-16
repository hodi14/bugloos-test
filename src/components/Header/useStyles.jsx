import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "fixed",
    top: 0,
    width: "100vw",
    height: "6rem",
  },

  social: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.main,
    padding: "0.25rem",

    "& > a": {
      color: "#fff",
    },
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "1rem",
    margin: "1rem auto",
    padding: "0.5rem",
    maxWidth: "36rem",

    "& a": {
      color: "#fff",
    },
  },
}));

export default useStyles;
