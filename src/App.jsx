import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { Box } from "@mui/material";

import routes from "./configs/routes";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = location.pathname.split("/")[1] || "Courses App";
  }, [location]);

  return (
    <Box className="App">
      <Header />

      <Box className="pageContent">
        <Routes>
          {routes.map((item) => {
            return (
              <Route path={item.path} element={item.element} key={item.path} />
            );
          })}
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
