import ReactPlayer from 'react-player/youtube';
import styles from "./MovieInfo.module.css";

const MovieInfo = (prop) => {
  const { movie } = prop;
  return (
    <div className={styles.movieInfo}>
      <span className={styles.movieHeader}>{movie.Name}</span>
      <ReactPlayer
        controls={true}
        url={movie.Trailer}
        height="500px"
        width="750px"
      />
    </div>
  );
};

export default MovieInfo;
