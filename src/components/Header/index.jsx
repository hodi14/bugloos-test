import { Link, useNavigate } from "react-router-dom";

import { Box, Button, Grid, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import useStyles from "./useStyles";

const Header = ({ path }) => {
  const styles = useStyles();

  const isLoggedIn = localStorage.getItem("currentUser");
  const navigate = useNavigate();

  const logUserHandler = () => {
    if (isLoggedIn) {
      localStorage.removeItem("currentUser");
      window.location.reload();
    } else {
      navigate("/login", { replace: true });
    }
  };

  return (
    <Box className={styles.header}>
      <Box className={styles.social}>
        <a href="tel:035 203 10 55">
          <LocalPhoneIcon />
          035 203 10 55
        </a>

        <a href="mailto:info@bugloos.nl">
          <EmailIcon /> info@bugloos.nl
        </a>
      </Box>

      <Box className={styles.navbar}>
        <Link to="/">HOME</Link>

        <Button variant="contained" color="secondary" onClick={logUserHandler}>
          {isLoggedIn ? "Logout" : "login"}
        </Button>
      </Box>

      <Grid container className={styles.headerPath}>
        {typeof path === "string" ? (
          <Typography>{path}</Typography>
        ) : (
          path.map((item, index) => (
            <Typography key={index}>
              {index > 1 ? <ArrowCircleRightIcon /> : null} {item}{" "}
            </Typography>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Header;
