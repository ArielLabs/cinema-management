import MovieForm from "../../components/MovieForm/MovieForm";
import styles from "./NewMoviePage.module.css";

const NewMoviePage = () => {
  return (
    <div className={styles.newMoviePage}>
      <MovieForm />
    </div>
  );
};

export default NewMoviePage;
