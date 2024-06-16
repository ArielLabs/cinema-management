import SubscriptionsTable from "../../components/SubscriptionsTable/SubscriptionsTable";
import styles from "./SubscriptionsPage.module.css";

const SubscriptionsPage = () => {
  return (
    <div className={styles.SubscriptionsPage}>
      <SubscriptionsTable />
    </div>
  );
};

export default SubscriptionsPage;
