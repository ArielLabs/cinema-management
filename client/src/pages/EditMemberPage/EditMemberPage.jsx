import { useLoaderData } from "react-router-dom";
import MemberForm from "../../components/MemberForm/MemberForm";
import styles from "./EditMemberPage.module.css";

const EditMemberPage = () => {
  const { message: memberDetails } = useLoaderData();
  console.log(memberDetails);
  return (
    <div className={styles.editMemberPage}>
      <MemberForm mode={"edit"} member={memberDetails} />
    </div>
  );
};

export default EditMemberPage;
