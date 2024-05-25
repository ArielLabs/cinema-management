import { useLoaderData } from "react-router-dom";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import styles from "./MoviePage.module.css";

const MoviePage = () => {
  const { message } = useLoaderData();
  console.log(message);
  return (
    <div className={styles.moviePage}>
      <MovieInfo movie={message} />
    </div>
  );
};

export default MoviePage;
