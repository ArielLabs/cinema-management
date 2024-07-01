import { useQuery } from "react-query";
import { axiosInstance } from "../../utils/http";
import SubscriptionsTable from "../../components/SubscriptionsTable/SubscriptionsTable";
import styles from "./SubscriptionsPage.module.css";

const SubscriptionsPage = () => {
  const fetchMembers = async () => {
    const { data } = await axiosInstance.get("members");
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: "fetch-members",
    queryFn: fetchMembers,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  return (
    <div className={styles.SubscriptionsPage}>
      <SubscriptionsTable members={data} isLoading={isLoading} />
    </div>
  );
};

export default SubscriptionsPage;
