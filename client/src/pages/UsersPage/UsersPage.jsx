import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/http";
import UsersTable from "../../components/UsersTable/UsersTable";
import styles from "./UsersPage.module.css";

const UsersPage = () => {
  const navigate = useNavigate();
  const fetchUsers = async () => {
    const response = await axiosInstance.get("users");

    if (response.status !== 200) {
      throw Error("Failed to fetch users");
    }

    return response.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: "fetch-users",
    queryFn: fetchUsers,
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
    <div className={styles.usersPage}>
      <UsersTable users={data} isLoading={isLoading} />
    </div>
  );
};

export default UsersPage;
