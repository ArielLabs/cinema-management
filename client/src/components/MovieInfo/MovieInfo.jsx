import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
import ModalDelete from "../ModalDelete/ModalDelete";
import styles from "./MovieInfo.module.css";

const MovieInfo = (prop) => {
  const { movie } = prop;
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const subs = [
    { id: 1, name: "Gil Milo", date: "11/14/2023" },
    { id: 2, name: "Dana Varod", date: "12/19/2023" },
    { id: 3, name: "Orit Sason", date: "08/22/2023" },
    { id: 4, name: "Pini Natcho", date: "06/30/2023" },
    { id: 5, name: "Barbi Cohen", date: "11/14/2023" },
    { id: 6, name: "Eli Mizrachi", date: "03/02/2023" },
  ];

  const dateFormat = (dateInput) => {
    const date = new Date(dateInput);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const editMovieHandler = () => {
    navigate(`/cinema/movies/${movie._id}/edit`);
  };

  const openDeleteModalHandler = () => {
    setOpenModal((prevState) => !prevState);
  };

  const closeDeleteModalHandler = () => {
    setOpenModal((prevState) => !prevState);
    navigate("/cinema/movies");
  };

  return (
    <div className={styles.movieInfo}>
      <div className={styles.movieHeader}>
        <span className={styles.movieName}>{movie.Name}</span>
        <div className={styles.movieBtnAction}>
          <Button
            variant="contained"
            endIcon={<EditIcon />}
            onClick={editMovieHandler}
            sx={{
              width: "120px",
              backgroundColor: "orange",
              "&:hover": { backgroundColor: "#e59502" },
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            endIcon={<DeleteIcon />}
            onClick={openDeleteModalHandler}
            sx={{
              width: "120px",
              backgroundColor: "#f44c4c",
              "&:hover": { backgroundColor: "red" },
            }}
          >
            Delete
          </Button>
        </div>
      </div>
      <ReactPlayer
        controls={true}
        url={movie.Trailer}
        height="500px"
        width="100%"
      />
      <div className={styles.movieDetailsContainer}>
        <div
          className={styles.movieImage}
          style={{ backgroundImage: `url(${movie.Image})` }}
        ></div>
        <div className={styles.moreInfo}>
          <div style={{ marginBottom: "0.75rem" }}>
            <span className={styles.titleMoreInfo}>
              More Information About {movie.Name}
            </span>
          </div>
          <div className={styles.moreInfoDetails}>
            <div className={styles.premieredSection}>
              <CalendarMonthIcon
                sx={{ color: "white", width: "2.5rem", height: "2.5rem" }}
              />
              <div className={styles.premieredDetails}>
                <span style={{ fontWeight: "bold" }}>Release Date:</span>
                <span>{dateFormat(movie.Premiered)}</span>
              </div>
            </div>
            <div className={styles.runtimeSection}>
              <AccessTimeIcon
                sx={{ color: "white", width: "2.5rem", height: "2.5rem" }}
              />
              <div className={styles.runtimeDetails}>
                <span style={{ fontWeight: "bold" }}>Running Time:</span>
                <span>{movie.Runtime} minutes</span>
              </div>
            </div>
          </div>
          <div className={styles.plotSection}>
            <p>{movie.Plot}</p>
          </div>
          <div className={styles.listDetails}>
            <div className={styles.listItem}>
              <span>Film genre:</span>
              <span>{movie.Genres.join(", ")}</span>
            </div>
            <div className={styles.listItem}>
              <span>Original language:</span>
              <span>{movie.Language}</span>
            </div>
            <div className={styles.listItem}>
              <span>Age restrictions:</span>
              <span>{movie.AgeRestriction}</span>
            </div>
          </div>
        </div>
        <div className={styles.movieSubscription}>
          <h2 className={styles.titleSubscriptions}>
            Subscriptions Watched{" "}
            <PhotoCameraFrontIcon
              sx={{ color: "white", width: "2.5rem", height: "2.5rem" }}
            />
          </h2>
          <div className={styles.subscriptionsList}>
            {subs.map((sub) => (
              <div key={sub.id} className={styles.listItem}>
                <span>
                  <span className={styles.subsItem}>{sub.name}</span> -{" "}
                  {sub.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ModalDelete
        onOpen={openModal}
        itemId={movie._id}
        itemType={"movies"}
        onClose={closeDeleteModalHandler}
      />
    </div>
  );
};

export default MovieInfo;
