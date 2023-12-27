import logo from "../../assets/cinema.jpg";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
    return(
        <div className={styles.loginPage}>
            <div className={styles.logoImg} style={{backgroundImage: `url(${logo})`}}></div>
            <div className={styles.loginForm}>
                <h3>Login</h3>
            </div>
        </div>
    );
};

export default LoginPage;