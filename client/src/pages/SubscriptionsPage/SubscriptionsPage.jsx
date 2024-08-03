import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/http";
import SubscriptionsTable from "../../components/SubscriptionsTable/SubscriptionsTable";
import styles from "./SubscriptionsPage.module.css";

const SubscriptionsPage = () => {
  const navigate = useNavigate();

  const fetchMembers = async () => {
    try {
      const { data } = await axiosInstance.get("members");
      return data;
    } catch (err) {
      const { status } = err.response;
      if (status === 401 || status === 403) {
        navigate("/login");
      }
    }
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
