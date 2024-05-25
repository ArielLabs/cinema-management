import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "./MovieCard.module.css";

const MovieCard = (prop) => {
  const { movie } = prop;
  const navigate = useNavigate();
  const premieredDate = movie.Premiered.split("T")[0];

  const moviePageHandler = () => {
    navigate(`${movie._id}`);
  };
  
  return (
    <div className={styles.movieCard}>
      <div className={styles.movieCardInner}>
        <div
          className={styles.movieCardFront}
          style={{ backgroundImage: `url(${movie.Image})` }}
        ></div>
        <div className={styles.movieCardBack}>
          <div className={styles.movieCardBackContent}>
            <span className={styles.movieName}>{movie.Name}</span>
            <div className={styles.movieCardBackDetails}>
              <p>
                <b>Genres: </b>
                {movie.Genres.join(", ")}
              </p>
              <p>
                <b>Runtime: </b>
                {movie.Runtime} minutes
              </p>
              <p>
                <b>Premiered: </b>
                {premieredDate}
              </p>
              <p>
                <b>Age Restriction: </b>
                {movie.AgeRestriction}
              </p>
            </div>
            <div className={styles.movieBtn}>
              <Button
                variant="contained"
                color="warning"
                onClick={moviePageHandler}
              >
                Movie Page
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
