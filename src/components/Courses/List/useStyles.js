import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  sortSelect: {
    "&.MuiFormControl-root": {
      marginBottom: "2rem",
      maxWidth: "15rem",

      "& .MuiFormLabel-root": {
        color: theme.palette.primary.main,
        paddingLeft: "1rem",
      },
    },

    "& .MuiInputBase-root fieldset": {
      borderRadius: "1rem",
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },

  coursesList: {},
}));

export default useStyles;
