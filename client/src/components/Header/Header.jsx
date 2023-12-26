import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <AppBar position="static" sx={{backgroundColor: "#200639"}}>
        <Toolbar>
            <span className={styles.titleApp}>Cinema</span>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
