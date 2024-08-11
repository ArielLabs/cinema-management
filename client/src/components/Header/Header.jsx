import { useMutation } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { searchActions } from "../../store/search";
import { axiosInstance } from "../../utils/http";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import styles from "./Header.module.css";

const Header = () => {
  const { fullName, role, permissions } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    return await axiosInstance.post("auth/logout");
  };

  const { mutate: exit } = useMutation({
    mutationKey: "logout",
    mutationFn: logout,
    onSuccess: () => {
      dispatch(authActions.clearAuth());
      dispatch(searchActions.clearSearch());
      navigate("/login");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const logoutHandler = () => {
    exit();
  };

  return (
    <div className={styles.header}>
      <div className={styles.toolbar}>
        <div className={styles.headerUser}>
          <AccountCircleIcon />
          <span>{fullName}</span>
        </div>
        <span className={styles.titleApp}>Cinema</span>
      </div>
      <div className={styles.navlinks}>
        {role === "Admin" && (
          <NavLink
            to={"users"}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Users
          </NavLink>
        )}
        {permissions.subscriptions.includes("View") && (
          <NavLink
            to={"subscriptions"}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Subscriptions
          </NavLink>
        )}
        <NavLink
          to={"movies"}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Movies
        </NavLink>
        <IconButton sx={{ color: "white" }} onClick={logoutHandler}>
          <ExitToAppIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
