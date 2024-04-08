import NewUserForm from "../../components/NewUserForm/NewUserForm";
import styles from "./NewUserPage.module.css";

const NewUserPage = () => {
    return(
        <div className={styles.newUserPage}>
            <NewUserForm />
        </div>
    );
};

export default NewUserPage;