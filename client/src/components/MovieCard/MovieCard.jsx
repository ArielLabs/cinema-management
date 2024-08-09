import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import styles from "./MovieCard.module.css";

const MovieCard = (prop) => {
  const { movie } = prop;
  const { permissions } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { $y: year, $M: month, $D: day } = dayjs(movie.Premiered);

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
                {`${month + 1}/${day}/${year}`}
              </p>
              <p>
                <b>Age Restriction: </b>
                {movie.AgeRestriction}
              </p>
            </div>
            <div className={styles.movieBtn}>
              {permissions.movies.includes("View") && (
                <Button
                  variant="contained"
                  color="warning"
                  onClick={moviePageHandler}
                >
                  Movie Page
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
