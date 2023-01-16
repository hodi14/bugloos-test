import { Box, Typography } from "@mui/material";

import useStyles from "./useStyles";

const Footer = () => {
  const styles = useStyles();

  return (
    <Box className={styles.footer}>
      <Typography>Copyright @{new Date().getFullYear()}</Typography>
    </Box>
  );
};

export default Footer;
