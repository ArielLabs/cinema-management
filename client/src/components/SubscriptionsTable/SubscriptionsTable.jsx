import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./SubscriptionsTable.module.css";
import SelectList from "../SelectList/SelectList";

const SubscriptionsTable = () => {
  const members = [
    {
      _id: "1",
      Name: "Rafi Maman",
      Email: "rafi@gmail.com",
      City: "Tel Aviv",
      Phone: "052-7387601",
      Movies: [
        { _id: "niend8", content: "Spiderman - 12/17/2023" },
        { _id: "nien38", content: "Pretty Woman - 07/14/2023" },
      ],
    },
    {
      _id: "2",
      Name: "David Berger",
      Email: "davidBerger@gmail.com",
      City: "Holon",
      Phone: "050-4190653",
      Movies: [
        { _id: "kiend8", content: "End Game - 11/24/2023" },
        { _id: "kien38", content: "Pretty Woman - 08/04/2023" },
      ],
    },
    {
      _id: "3",
      Name: "Linoy Raidman",
      Email: "linoyRaidman@gmail.com",
      City: "Jerusalem",
      Phone: "052-9224038",
      Movies: [
        { _id: "piend8", content: "Trimuth - 10/30/2023" },
        { _id: "pien38", content: "57 Seconds - 04/11/2023" },
      ],
    },
  ];
  const newMemberHandler = () => {};
  const openDeleteModalHandler = () => {};
  const editMemberHandler = () => {};
  return (
    <div className={styles.subscriptionsTableContainer}>
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
        onClick={newMemberHandler}
      >
        New Member
      </Button>
      <table className={styles.subscriptionsTable}>
        <thead>
          <tr className={styles.titlesColumns}>
            <th style={{ width: "8%" }}></th>
            <th style={{ width: "25%", textAlign: "left" }}>
              <div style={{ marginLeft: "1rem" }}>Name & Email</div>
            </th>
            <th style={{ width: "12%" }}>City</th>
            <th style={{ width: "12%" }}>Phone</th>
            <th style={{ width: "27%" }}>Movies Watched</th>
            <th style={{ width: "16%" }}>Subscribe</th>
          </tr>
        </thead>
        <tbody className={styles.scrollableTbody}>
          {members.map((member) => (
            <tr key={member._id} className={styles.subscriptionRow}>
              <td style={{ width: "8%" }}>
                <IconButton
                  sx={{ color: "#fa626e" }}
                  onClick={() => openDeleteModalHandler(member._id)}
                >
                  <ClearIcon />
                </IconButton>
                <IconButton
                  sx={{ color: "orange" }}
                  onClick={() => editMemberHandler(member._id)}
                >
                  <EditIcon />
                </IconButton>
              </td>
              <td style={{ width: "25%" }}>
                <div className={styles.sectionNameEmail}>
                  <div className={styles.userAvatar}>{member.Name[0]}</div>
                  <div className={styles.contentNameEmail}>
                    <span className={styles.fullname}>{member.Name}</span>
                    <span className={styles.email}>{member.Email}</span>
                  </div>
                </div>
              </td>
              <td style={{ width: "12%" }} className={styles.citySection}>
                {member.City}
              </td>
              <td style={{ width: "12%" }} className={styles.phoneSection}>
                {member.Phone}
              </td>
              <td style={{ width: "27%" }}>
                <div className={styles.moviesSection}>
                  <SelectList label={"Movies"} options={member.Movies} />
                </div>
              </td>
              <td style={{ width: "16%" }} className={styles.subscribeSection}>
                <span>Subscribe</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionsTable;
