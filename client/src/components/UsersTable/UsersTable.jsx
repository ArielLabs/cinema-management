import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./UsersTable.module.css";
import PermissionChip from "../PermissionChip/PermissionChip";
import SkeletonTable from "../SkeletonTable/SkeletonTable";

const UsersTable = (prop) => {
  const { users, isLoading } = prop;
  const navigate = useNavigate();


  const newUserHandler = () => {
    navigate("/cinema/users/new");
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
                  <IconButton sx={{ color: "#fa626e" }}>
                    <ClearIcon />
                  </IconButton>
                  <IconButton sx={{ color: "orange" }}>
                    <EditIcon />
                  </IconButton>
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
    </div>
  );
};

export default UsersTable;
