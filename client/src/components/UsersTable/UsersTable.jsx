import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import ModalDelete from "../ModalDelete/ModalDelete";
import PermissionChip from "../PermissionChip/PermissionChip";
import SkeletonTable from "../SkeletonTable/SkeletonTable";
import styles from "./UsersTable.module.css";

const UsersTable = (prop) => {
  const { users, isLoading } = prop;
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const newUserHandler = () => {
    navigate("/cinema/users/new");
  };

  const editUserHandler = (userId) => {
    navigate(`${userId}`);
  };

  const openDeleteModalHandler = (userId) => {
    setSelectedUser(userId);
    setOpenModal((prevState) => !prevState);
  };

  const closeDeleteModalHandler = () => {
    setSelectedUser(null);
    setOpenModal((prevState) => !prevState);
  };

  return (
    <div className={styles.usersTableContainer}>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          marginBottom: "1rem",
          marginRight: "1rem",
          textTransform: "none",
          backgroundColor: "#646cff",
          "&:hover": {
            backgroundColor: "#4a54fb",
          },
        }}
        onClick={newUserHandler}
      >
        New User
      </Button>
      {!isLoading && (
        <table className={styles.usersTable}>
          <thead>
            <tr className={styles.titlesColumns}>
              <th style={{ width: "8%" }}></th>
              <th style={{ width: "25%", textAlign: "left" }}>
                <div style={{ marginLeft: "1rem" }}>Name & Email</div>
              </th>
              <th style={{ width: "11%" }}>Session Timeout</th>
              <th style={{ width: "22%" }}>Movies Permissions</th>
              <th style={{ width: "22%" }}>Subscriptions Permissions</th>
              <th style={{ width: "12%" }}>Created</th>
            </tr>
          </thead>
          <tbody className={styles.scrollableTbody}>
            {users.message.map((user) => (
              <tr key={user._id} className={styles.userRow}>
                <td style={{ width: "8%" }}>
                  <div className={styles.usersActions}>
                    {user.Role === "User" && (
                      <IconButton
                        sx={{ color: "#fa626e" }}
                        onClick={() => openDeleteModalHandler(user._id)}
                      >
                        <ClearIcon />
                      </IconButton>
                    )}
                    <IconButton
                      sx={{ color: "orange" }}
                      onClick={() => editUserHandler(user._id)}
                    >
                      <EditIcon />
                    </IconButton>
                  </div>
                </td>
                <td style={{ width: "25%" }}>
                  <div className={styles.sectionNameEmail}>
                    <div className={styles.userAvatar}>{user.FirstName[0]}</div>
                    <div className={styles.contentNameEmail}>
                      <span className={styles.fullname}>
                        {user.FirstName} {user.LastName}
                      </span>
                      <span className={styles.email}>{user.Email}</span>
                    </div>
                  </div>
                </td>
                <td style={{ width: "11%" }} className={styles.sessionSection}>
                  {user.SessionTimeOut} mins
                </td>
                <td style={{ width: "22%" }}>
                  <div className={styles.permissionSection}>
                    {user.moviesPermissions.map((moviePermission) => (
                      <PermissionChip
                        key={moviePermission.id}
                        content={moviePermission.permission}
                      />
                    ))}
                  </div>
                </td>
                <td style={{ width: "22%" }}>
                  <div className={styles.permissionSection}>
                    {user.subscriptionsPermissions.map(
                      (subscriptionsPermission) => (
                        <PermissionChip
                          key={subscriptionsPermission.id}
                          content={subscriptionsPermission.permission}
                        />
                      )
                    )}
                  </div>
                </td>
                <td style={{ width: "12%" }} className={styles.createSection}>
                  {user.CreatedDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isLoading && <SkeletonTable />}
      <ModalDelete
        onOpen={openModal}
        itemId={selectedUser}
        itemType={"users"}
        onClose={closeDeleteModalHandler}
      />
    </div>
  );
};

export default UsersTable;
