import UserForm from "../../components/UserForm/UserForm";
import styles from "./NewUserPage.module.css";

const NewUserPage = () => {
  const initPermissions = [
    { permission: "View", checked: false },
    { permission: "Create", checked: false },
    { permission: "Delete", checked: false },
    { permission: "Edit", checked: false },
  ];
  const userDetails = {
    FirstName: "",
    LastName: "",
    Email: "",
    SessionTimeOut: "",
    moviesPermissions: initPermissions,
    subscriptionsPermissions: initPermissions,
  };
  return (
    <div className={styles.newUserPage}>
      <UserForm mode={"create"} details={userDetails} />
    </div>
  );
};

export default NewUserPage;
