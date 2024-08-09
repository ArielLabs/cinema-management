import { userDetails } from "../../utils/constants";
import UserForm from "../../components/UserForm/UserForm";
import styles from "./NewUserPage.module.css";

const NewUserPage = () => {
  return (
    <div className={styles.newUserPage}>
      <UserForm mode={"create"} details={userDetails} />
    </div>
  );
};

export default NewUserPage;
