import { useState } from "react";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SlideshowIcon from '@mui/icons-material/Slideshow';
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./SubscriptionsTable.module.css";
import SelectList from "../SelectList/SelectList";
import MovieSubscribe from "../MovieSubscribe/MovieSubscribe";

const SubscriptionsTable = () => {
  const [openModalSubscribe, setOpenModalSubscribe] = useState(false);
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

  const toggleSubscribeToMovieHandler = () => {
    setOpenModalSubscribe((prevState) => !prevState);
  };

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
      <Button
        variant="contained"
        startIcon={<SlideshowIcon />}
        sx={{
          marginBottom: "1rem",
          marginRight: "1rem",
          textTransform: "none",
          backgroundColor: "#9b64ff",
          "&:hover": {
            backgroundColor: "#8647f9",
          },
        }}
        onClick={toggleSubscribeToMovieHandler}
      >
        Subscribe to Movie
      </Button>
      <table className={styles.subscriptionsTable}>
        <thead>
          <tr className={styles.titlesColumns}>
            <th style={{ width: "8%" }}></th>
            <th style={{ width: "25%", textAlign: "left" }}>
              <div style={{ marginLeft: "1rem" }}>Name & Email</div>
            </th>
            <th style={{ width: "15%" }}>City</th>
            <th style={{ width: "15%" }}>Phone</th>
            <th style={{ width: "37%" }}>Movies Watched</th>
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
              <td style={{ width: "15%" }} className={styles.citySection}>
                {member.City}
              </td>
              <td style={{ width: "15%" }} className={styles.phoneSection}>
                {member.Phone}
              </td>
              <td style={{ width: "37%" }}>
                <div className={styles.moviesSection}>
                  <SelectList label={"Movies"} options={member.Movies} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <MovieSubscribe
        onOpen={openModalSubscribe}
        onClose={toggleSubscribeToMovieHandler}
      />
    </div>
  );
};

export default SubscriptionsTable;
