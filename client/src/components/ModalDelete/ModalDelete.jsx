import { useMutation, useQueryClient } from "react-query";
import { axiosInstance } from "../../utils/http";
import { displayAlert } from "../../utils/alerts";
import { Box, Typography, Button, Modal } from "@mui/material";
import styles from "./ModalDelete.module.css";

const ModalDelete = (prop) => {
  const { onOpen, itemId, itemType, onClose } = prop;
  const queryClient = useQueryClient();

  const submitDelete = async () => {
    return await axiosInstance.delete(`${itemType}/${itemId}`);
  };

  const { mutate: deleteItem } = useMutation({
    mutationKey: "delete-item",
    mutationFn: submitDelete,
    onSuccess: (res) => {
      onClose();
      const { message } = res.data;
      displayAlert("success", message).then(() => {
        if (itemType === "users") {
          queryClient.invalidateQueries("fetch-users");
        }
        if (itemType === "members") {
          queryClient.invalidateQueries("fetch-members");
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
    deleteItem();
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
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalDelete;
