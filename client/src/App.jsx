import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import CinemaLayout from "./pages/CinemaLayout/CinemaLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MoviePage from "./pages/MoviePage/MoviePage";
import NewMoviePage from "./pages/NewMoviePage/NewMoviePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import NewUserPage from "./pages/NewUserPage/NewUserPage";
import EditMoviePage from "./pages/EditMoviePage/EditMoviePage";
import EditUserPage from "./pages/EditUserPage/EditUserPage";
import SubscriptionsPage from "./pages/SubscriptionsPage/SubscriptionsPage";
import NewMemberPage from "./pages/NewMemberPage/NewMemberPage";
import { fetchMovie, fetchUser } from "./utils/loaders";

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
      { path: "movies/new", element: <NewMoviePage /> },
      { path: "movies/:id", element: <MoviePage />, loader: fetchMovie },
      { path: "movies/:id/edit", element: <EditMoviePage />, loader: fetchMovie },
      { path: "users", element: <UsersPage /> },
      { path: "users/new", element: <NewUserPage /> },
      { path: "users/:id", element: <EditUserPage />, loader: fetchUser },
      { path: "subscriptions", element: <SubscriptionsPage /> },
      { path: "subscriptions/new", element: <NewMemberPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routerApp} />;
}

export default App;
