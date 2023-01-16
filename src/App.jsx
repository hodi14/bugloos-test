import { Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";

import routes from "./configs/routes";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
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
