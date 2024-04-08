import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import CinemaLayout from "./pages/CinemaLayout/CinemaLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import NewUserPage from "./pages/NewUserPage/NewUserPage";
import SubscriptionsPage from "./pages/SubscriptionsPage/SubscriptionsPage";

const routerApp = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/cinema",
    element: <CinemaLayout />,
    children: [
      { index: true, path: "movies", element: <MoviesPage /> },
      { path: "users", element: <UsersPage /> },
      { path: "users/new", element: <NewUserPage /> },
      { path: "subscriptions", element: <SubscriptionsPage />},
    ],
  },
])

function App() {
  return <RouterProvider router={routerApp} />;
}

export default App;
