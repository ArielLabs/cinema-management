import styles from "./SkeletonTable.module.css";

const SkeletonTable = () => {
  const numberOfRows = 4;
  return (
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
        {[...Array(numberOfRows)].map((e, index) => (
          <tr key={index} className={styles.userRow}>
            <td style={{ width: "8%" }}>
              <div className={styles.skeleton}></div>
            </td>
            <td style={{ width: "25%" }}>
              <div className={styles.skeleton}></div>
            </td>
            <td style={{ width: "11%" }}>
                <div className={styles.skeleton}></div>
            </td>
            <td style={{ width: "22%" }}>
                <div className={styles.skeleton}></div>
            </td>
            <td style={{ width: "22%" }}>
                <div className={styles.skeleton}></div>
            </td>
            <td style={{ width: "12%" }}>
                <div className={styles.skeleton}></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SkeletonTable;
