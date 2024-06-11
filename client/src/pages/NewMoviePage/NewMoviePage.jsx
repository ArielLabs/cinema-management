import MovieForm from "../../components/MovieForm/MovieForm";
import styles from "./NewMoviePage.module.css";

const NewMoviePage = () => {
  const movieDetails = {
    Name: "",
    Runtime: "",
    AgeRestriction: "",
    Genres: [],
    Premiered: "",
    Language: "",
    Image: "",
    Trailer: "",
    Plot: "",
  };
  return (
    <div className={styles.newMoviePage}>
      <MovieForm mode={"create"} movie={movieDetails} />
    </div>
  );
};

export default NewMoviePage;
