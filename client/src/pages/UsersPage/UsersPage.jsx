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

  if (isLoading) {
    return (
      <div className={styles.usersPage}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles.usersPage}>
      <UsersTable users={data.message} />
    </div>
  );
};

export default UsersPage;
