import { useQuery } from "react-query";
import axios from "axios";
import env from "../../environment";
import UsersTable from "../../components/UsersTable/UsersTable";
import styles from "./UsersPage.module.css";

const UsersPage = () => {

  const fetchUsers = async () => {
    const { data } = await axios.get(`${env.apiURL}/users`);
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: "fetch-users",
    queryFn: fetchUsers,
    staleTime: Infinity,
    cacheTime: Infinity
  });

  return (
    <div className={styles.usersPage}>
      <UsersTable users={data} isLoading={isLoading} />
    </div>
  );
};

export default UsersPage;
