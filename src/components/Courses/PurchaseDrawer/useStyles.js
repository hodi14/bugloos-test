import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  purchaseDrawer: {
    "&.MuiDrawer-root": {
      "& .MuiDrawer-paper": {
        borderRadius: "1rem 1rem 0 0",
        padding: "1rem",
      },
    },
  },

  purchaseDrawerContent: {
    maxWidth: "576px",
    margin: "auto",
    textAlign: "center",
    width: "100%",

    "& .MuiTypography-root": {
      color: theme.palette.secondary.main,
      fontWeight: "bold",
      marginBottom: "1rem",
    },

    "& img": {
      maxHeight: "min(20rem, 40vh)",
    },
  },
}));

export default useStyles;
