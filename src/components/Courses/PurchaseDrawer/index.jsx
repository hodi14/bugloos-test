import { Box, Button, Drawer, Grid, Typography } from "@mui/material";

import purchaseBackground from "../../../assets/images/purchaseBackground.svg";
import errorBackground from "../../../assets/images/errorBackground.svg";

import useStyles from "./useStyles";

const CoursePurchaseDrawer = ({
  open,
  toggleDrawer,
  selectedCourse,
  onCompleted,
}) => {
  const styles = useStyles();

  const isLoggedIn = localStorage.getItem("user");

  return (
    <Drawer
      className={styles.purchaseDrawer}
      open={open}
      onClose={toggleDrawer}
      anchor="bottom"
    >
      <Box className={styles.purchaseDrawerContent}>
        {isLoggedIn ? (
          <Box>
            <Typography>
              {selectedCourse?.price
                ? `${selectedCourse?.title} with the price of
${selectedCourse?.price} dollars will be added to your credit.`
                : `${selectedCourse?.title} will get added to your
courses!`}
            </Typography>

            <img src={purchaseBackground} alt="PURCHASE" />

            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => {
                    toggleDrawer();
                    onCompleted();
                  }}
                >
                  Accept
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  onClick={toggleDrawer}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <>
            <Typography>
              You need to log in first to be abale to purchase our courses!
            </Typography>

            <img src={errorBackground} alt="NOT LOGGED IN" />
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default CoursePurchaseDrawer;
