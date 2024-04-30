import { useLoaderData } from "react-router-dom";
import UserForm from "../../components/UserForm/UserForm";
import styles from "./EditUserPage.module.css";

const EditUserPage = () => {
  const { message: userDetails } = useLoaderData();
  return (
    <div className={styles.editUserPage}>
      <UserForm mode={"edit"} details={userDetails} />
    </div>
  );
};

export default EditUserPage;
