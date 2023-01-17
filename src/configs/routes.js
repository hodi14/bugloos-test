import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";

const isLoggedIn = localStorage.getItem("user");

const routes = [
  { path: "/", element: <HomePage /> },
  {
    path: "/login",
    element: <LoginPage />,
    redirect: isLoggedIn ? "/" : false,
  },
  {
    path: "*",
    redirect: "/",
  },
];

export default routes;
