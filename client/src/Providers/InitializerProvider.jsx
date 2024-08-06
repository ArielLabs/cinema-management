import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { axiosInstance } from "../utils/http";

const InitializerProvider = (prop) => {
  const { children } = prop;
  const dispatch = useDispatch();

  const fetchUserPermissions = async () => {
    return await axiosInstance.get("users/data/permissions");
  };

  useQuery({
    queryKey: "fetch-users-permissions",
    queryFn: fetchUserPermissions,
    refetchOnWindowFocus: false,
    onSuccess: (res) => {
      const { message: userPermissions } = res.data;
      dispatch(authActions.setAuth(userPermissions));
    },
  });

  return <>{children}</>;
};

export default InitializerProvider;
