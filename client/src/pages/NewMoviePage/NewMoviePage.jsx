import { movieDetails } from "../../utils/constants";
import MovieForm from "../../components/MovieForm/MovieForm";
import styles from "./NewMoviePage.module.css";

const NewMoviePage = () => {
  return (
    <div className={styles.newMoviePage}>
      <MovieForm mode={"create"} movie={movieDetails} />
    </div>
  );
};

export default NewMoviePage;
