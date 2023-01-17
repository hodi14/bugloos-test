import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Box } from "@mui/material";

import routes from "./configs/routes";
import users from "./Data/users.json";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [path, setPath] = useState("Courses App");

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
