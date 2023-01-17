import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  topSelector: {
    marginBottom: "2rem",

    "& .MuiGrid-item:nth-child(2)": {
      paddingLeft: "1rem",
    },
  },

  sortSelect: {
    "&.MuiFormControl-root": {
      "& .MuiFormLabel-root": {
        color: theme.palette.primary.main,
        paddingLeft: "1rem",
      },
    },

    "& .MuiInputBase-root fieldset": {
      borderRadius: "0.5rem",
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },

  noData: {
    margin: "1rem auto",

    "& img": {
      maxWidth: "20rem",
    },

    "& .MuiTypography-root": {
      color: theme.palette.primary.main,
      fontSize: "2rem",
    },
  },
}));

export default useStyles;
