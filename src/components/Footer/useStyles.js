import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.secondary.main,
    margin: "auto 0 0",
    padding: "0.5rem",
    textAlign: "center",

    "& .MuiTypography-root": {
      color: "#fff",
    },
  },
}));

export default useStyles;
