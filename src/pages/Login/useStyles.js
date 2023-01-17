import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  loginCard: {
    "&.MuiCard-root": {
      display: "flex",
      borderRadius: "1rem",
      backgroundColor: theme.palette.primary.light,
      boxShadow: "none",
      minHeight: "26rem",
      padding: "0.5rem",
      transition: "0.4s",

      "& > .MuiGrid-root": {
        flexGrow: 1,

        "& > .MuiGrid-item:first-child": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        },

        "& > .MuiGrid-item:nth-child(2)": {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,

          "& [role=tabpanel]": {
            display: "flex",

            "&.selected": {
              flexGrow: 1,
            },
          },

          "& form": {
            paddingTop: "1rem",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,

            "& .MuiButton-root": {
              margin: "auto 0 0",
            },
          },
        },
      },

      "& .MuiTabs-flexContainer": {
        width: "100%",

        "& .MuiTab-root": {
          width: "50%",
        },
      },

      "& .MuiTextField-root": {
        marginBottom: "1rem",
        width: "100%",
      },
    },
  },
}));

export default useStyles;
