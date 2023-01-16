import { Link } from "react-router-dom";

import { Box, Button } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

import useStyles from "./useStyles";

const Header = () => {
  const styles = useStyles();

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
        <Link to="/">Courses</Link>

        <Button variant="contained" color="secondary">
          <Link to="/login">login</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
