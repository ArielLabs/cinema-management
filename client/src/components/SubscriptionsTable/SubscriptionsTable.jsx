import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import SelectList from "../SelectList/SelectList";
import MovieSubscribe from "../MovieSubscribe/MovieSubscribe";
import styles from "./SubscriptionsTable.module.css";

const SubscriptionsTable = (prop) => {
  const { members, isLoading } = prop;
  const [openModalSubscribe, setOpenModalSubscribe] = useState(false);
  const navigate = useNavigate();

  const phoneFormat = (phone) => {
    return `${phone.slice(0, 3)}-${phone.slice(3, 10)}`;
  };

  const dateFormat = (dateInput) => {
    const date = new Date(dateInput);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const newMemberHandler = () => {
    navigate("new");
  };

  const openDeleteModalHandler = () => {};

  const editMemberHandler = (memberId) => {
    navigate(`${memberId}`);
  };

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
      {!isLoading && (
        <table className={styles.subscriptionsTable}>
          <thead>
            <tr className={styles.titlesColumns}>
              <th style={{ width: "8%" }}></th>
              <th style={{ width: "25%", textAlign: "left" }}>
                <div style={{ marginLeft: "1rem" }}>Name & Email</div>
              </th>
              <th style={{ width: "13%" }}>City</th>
              <th style={{ width: "13%" }}>Phone</th>
              <th style={{ width: "41%" }}>Movies Watched</th>
            </tr>
          </thead>
          <tbody className={styles.scrollableTbody}>
            {members.message.map((member) => (
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
                <td style={{ width: "13%" }} className={styles.content}>
                  {member.City}
                </td>
                <td style={{ width: "13%" }} className={styles.content}>
                  {phoneFormat(member.Phone)}
                </td>
                <td style={{ width: "41%" }}>
                  <div className={styles.moviesSection}>
                    {Object.keys(member.Screenings[0]).length > 0 && (
                      <SelectList
                        label={"Movies"}
                        options={member.Screenings.map((s) => {
                          return {
                            _id: s._id,
                            content: `${s.Movie.Name} - ${dateFormat(s.Date)} ${s.Hour}, Hall: ${s.Hall}`,
                          };
                        })}
                      />
                    )}
                    {Object.keys(member.Screenings[0]).length === 0 && (
                      <p className={styles.content}>Not subscribed to movies</p>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <MovieSubscribe
        onOpen={openModalSubscribe}
        onClose={toggleSubscribeToMovieHandler}
        members={members}
      />
    </div>
  );
};

export default SubscriptionsTable;
