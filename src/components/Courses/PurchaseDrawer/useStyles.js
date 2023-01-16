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
    maxWidth: "768px",
    margin: "auto",
    textAlign: "center",

    "& .MuiTypography-root": {
      display: "flex",
      alignItems: "center",
      color: theme.palette.secondary.main,
      fontWeight: "bold",
      marginBottom: "1rem",
    },
  },
}));

export default useStyles;
