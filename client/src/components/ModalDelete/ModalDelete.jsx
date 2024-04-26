import { useMutation, useQueryClient } from "react-query";
import { axiosInstance } from "../../utils/http";
import { displayAlert } from "../../utils/alerts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styles from "./ModalDelete.module.css";

const ModalDelete = (prop) => {
  const { userId, onClose } = prop;
  const queryClient = useQueryClient();

  const submitDeleteUser = async () => {
    return await axiosInstance.delete(`users/${userId}`);
  };

  const { mutate: deleteUser } = useMutation({
    mutationKey: "delete-user",
    mutationFn: submitDeleteUser,
    onSuccess: (res) => {
      onClose();
      const { message } = res.data;
      displayAlert("success", message).then(() => {
        queryClient.invalidateQueries("fetch-users");
      });
    },
    onError: (err) => {
      onClose();
      const { message } = err.response.data;
      displayAlert("error", message);
    },
  });

  const deleteHandler = () => {
    deleteUser();
  };

  const cancelHandler = () => {
    onClose();
  };

  return (
    <Modal open={userId !== null}>
      <Box className={styles.container}>
        <Typography variant="h6" component="h2">
          Delete User
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Are you sure to delete this user from the system?
        </Typography>
        <div className={styles.actionsBtn}>
          <Button variant="contained" onClick={deleteHandler}>
            Delete
          </Button>
          <Button variant="outlined" onClick={cancelHandler}>
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalDelete;
