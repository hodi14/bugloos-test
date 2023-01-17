import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Box } from "@mui/material";

import routes from "./configs/routes";
import users from "./data/users.json";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

// App saves the data it needs inside localStorage. The current user's data, the courses that the user has purchased and all the users the app has.
// Data needed is read from data folder which contains mock jsons for users and courses
// user needs to log in in order to be able to purchase any of the courses

function App() {
  const location = useLocation();
  const [path, setPath] = useState("Courses App");

  // here we find the path of the app using the location hook and the pass the splitted array to header for breadcrub section
  useEffect(() => {
    document.title = location.pathname.split("/")[1] || "Courses App";
    setPath(
      location.pathname.split("/")[1]
        ? location.pathname.split("/")
        : "Courses App"
    );
  }, [location]);

  useEffect(() => {
    if (!localStorage.getItem("users"))
      localStorage.setItem("users", JSON.stringify(users));
  }, []);

  return (
    <Box className="App">
      <Header path={path} />

      <Box className="pageContent">
        <Routes>
          {routes.map((item) => {
            return (
              <Route
                path={item.path}
                element={
                  item.redirect ? (
                    <Navigate replace to={item.redirect} />
                  ) : (
                    item.element
                  )
                }
                key={item.path}
              />
            );
          })}
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
