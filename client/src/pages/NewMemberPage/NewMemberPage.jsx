import { memberDetails } from "../../utils/constants";
import MemberForm from "../../components/MemberForm/MemberForm";
import styles from "./NewMemberPage.module.css";

const NewMemberPage = () => {
  return (
    <div className={styles.newMemberPage}>
      <MemberForm mode={"create"} member={memberDetails} />
    </div>
  );
};

export default NewMemberPage;
