import LoginForm from "../../components/LoginForm/LoginForm";
import logo from "../../assets/cinema.jpg";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
    return(
        <div className={styles.loginPage}>
            <div className={styles.logoImg} style={{backgroundImage: `url(${logo})`}}></div>
            <div className={styles.loginFormSection}>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;