import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/http";
import UsersTable from "../../components/UsersTable/UsersTable";
import styles from "./UsersPage.module.css";

const UsersPage = () => {
  const navigate = useNavigate();
  const fetchUsers = async () => {
    try{
      const { data } = await axiosInstance.get("users");
      return data;
    }catch(err){
      const { status } = err.response;
      if(status === 401 || status === 403){
        navigate("/login");
      }
    }
  };

  const { data, isLoading } = useQuery(
    {
      queryKey: "fetch-users",
      queryFn: fetchUsers,
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  );

  return (
    <div className={styles.usersPage}>
      <UsersTable users={data} isLoading={isLoading} />
    </div>
  );
};

export default UsersPage;
