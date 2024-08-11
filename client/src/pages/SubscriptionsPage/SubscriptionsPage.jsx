import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/http";
import SubscriptionsTable from "../../components/SubscriptionsTable/SubscriptionsTable";
import styles from "./SubscriptionsPage.module.css";

const SubscriptionsPage = () => {
  const navigate = useNavigate();

  const fetchMembers = async () => {
    const response = await axiosInstance.get("members");

    if (response.status !== 200) {
      throw Error("Failed to fetch members");
    }

    return response.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: "fetch-members",
    queryFn: fetchMembers,
    retry: false,
    onError: (err) => {
      const { status } = err.response;
      if (status === 401 || status === 403) {
        navigate("/login");
      }
    },
    staleTime: 2 * 60 * 1000,
    cacheTime: 5 * 60 * 1000,
  });

  return (
    <div className={styles.SubscriptionsPage}>
      <SubscriptionsTable members={data} isLoading={isLoading} />
    </div>
  );
};

export default SubscriptionsPage;
