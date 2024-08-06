import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import styles from "./Header.module.css";

const Header = () => {
  const { fullName, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(authActions.clearAuth());
    navigate("/login");
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
        {role==="Admin" && <NavLink
          to={"users"}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Users
        </NavLink>}
        <NavLink
          to={"subscriptions"}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Subscriptions
        </NavLink>
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
