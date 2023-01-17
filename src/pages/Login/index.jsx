import { useState } from "react";

import { Card, Grid, Tab, Tabs } from "@mui/material";

import RegisterForm from "../../components/Login/Register";
import SignInForm from "../../components/Login/SignIn";
import background from "../../assets/images/loginBackground.svg";

import useStyles from "./useStyles";

// login validations work with react-hook-form. users can register and login. registered users will be added to the localStorage item storing all users so that they can login later.

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`login-tabpanel-${index}`}
      aria-labelledby={`login-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `login-tab-${index}`,
    "aria-controls": `login-tabpanel-${index}`,
  };
}

const LoginPage = () => {
  const styles = useStyles();

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Card className={styles.loginCard}>
      <Grid container>
        <Grid item xs={0} sm={6} px={2}>
          <img src={background} alt="LOGIN" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Tabs
            value={selectedTab}
            onChange={(e, value) => setSelectedTab(value)}
            aria-label="basic tabs example"
          >
            <Tab label="Sign In" {...a11yProps(0)} />
            <Tab label="Register" {...a11yProps(1)} />
          </Tabs>

          <TabPanel
            value={selectedTab}
            index={0}
            className={selectedTab === 0 ? "selected" : null}
          >
            <SignInForm />
          </TabPanel>
          <TabPanel
            value={selectedTab}
            index={1}
            className={selectedTab === 1 ? "selected" : null}
          >
            <RegisterForm />
          </TabPanel>
        </Grid>
      </Grid>
    </Card>
  );
};

export default LoginPage;
