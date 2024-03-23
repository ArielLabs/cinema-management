import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./UsersTable.module.css";
import PermissionChip from "../PermissionChip/PermissionChip";

const UsersTable = (prop) => {
  const { users } = prop;
  return (
    <div className={styles.usersTableContainer}>
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
          {users.map((user) => (
            <tr key={user.id} className={styles.userRow}>
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
                  <div className={styles.userAvatar}>{user.firstname[0]}</div>
                  <div className={styles.contentNameEmail}>
                    <span className={styles.fullname}>
                      {user.firstname} {user.lastname}
                    </span>
                    <span className={styles.email}>{user.email}</span>
                  </div>
                </div>
              </td>
              <td style={{ width: "11%" }} className={styles.sessionSection}>
                {user.sessionTimeout}
              </td>
              <td style={{ width: "22%" }}>
                <div className={styles.permissionSection}>
                  {user.moviesPermissions.map((moviePermission, idx) => (
                    <PermissionChip key={idx} content={moviePermission} />
                  ))}
                </div>
              </td>
              <td style={{ width: "22%" }}>
                <div className={styles.permissionSection}>
                  {user.subscriptionsPermissions.map(
                    (subscriptionsPermission, idx) => (
                      <PermissionChip
                        key={idx}
                        content={subscriptionsPermission}
                      />
                    )
                  )}
                </div>
              </td>
              <td style={{ width: "12%" }} className={styles.createSection}>
                {user.createdDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
