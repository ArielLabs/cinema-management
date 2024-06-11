import { useMutation, useQueryClient } from "react-query";
import { axiosInstance } from "../../utils/http";
import { displayAlert } from "../../utils/alerts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styles from "./ModalDelete.module.css";

const ModalDelete = (prop) => {
  const { onOpen, itemId, itemType, onClose } = prop;
  const queryClient = useQueryClient();

  const submitDelete = async () => {
    return await axiosInstance.delete(`${itemType}/${itemId}`);
  };

  const { mutate: deleteUser } = useMutation({
    mutationKey: "delete-item",
    mutationFn: submitDelete,
    onSuccess: (res) => {
      onClose();
      const { message } = res.data;
      displayAlert("success", message).then(() => {
        if (itemType === "users") {
          queryClient.invalidateQueries("fetch-users");
        }
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

  let item = "";
  if (itemType === "users") {
    item = "user";
  } else if (itemType === "movies") {
    item = "movie";
  } else {
    item = "member";
  }

  return (
    <Modal open={onOpen}>
      <Box className={styles.container}>
        <Typography variant="h6" component="h2">
          {`Delete ${item.charAt(0).toUpperCase() + item.slice(1)}`}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          {`Are you sure to delete this ${item} from the system?`}
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
