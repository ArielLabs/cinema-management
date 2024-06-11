import { useLoaderData } from "react-router-dom";
import MovieForm from "../../components/MovieForm/MovieForm";
import styles from "./EditMoviePage.module.css";

const EditMoviePage = () => {
  const { message } = useLoaderData();
  return (
    <div className={styles.editMoviePage}>
      <MovieForm mode={"edit"} movie={message} />
    </div>
  );
};

export default EditMoviePage;
