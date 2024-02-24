import RegisterForm from "../../components/RegisterForm/RegisterForm";
import logo from "../../assets/cinema.jpg";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
    return(
        <div className={styles.registerPage}>
            <div className={styles.logoImg} style={{backgroundImage: `url(${logo})`}}></div>
            <div className={styles.registerFormSection}>
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;