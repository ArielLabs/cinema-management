import { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { axiosInstance } from "../../utils/http";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [moviesList, setMoviesList] = useState({ totalPages: 0, movies: [] });

  useEffect(() => {
    scrollToTop();
  }, [moviesList]);

  const fetchMovies = async (page) => {
    const pageNumber = typeof page === "object" ? 1 : page;
    return await axiosInstance.get("movies", { params: { page: pageNumber } });
  };

  const { isLoading } = useQuery({
    queryKey: "fetch-movies",
    queryFn: fetchMovies,
    onSuccess: (res) => {
      const { message } = res.data;
      setMoviesList({
        totalPages: message.numberPages,
        movies: message.movies,
      });
    },
  });

  const { mutate: fetchMoviesByPage } = useMutation({
    mutationFn: fetchMovies,
    onSuccess: (res) => {
      const { message } = res.data;
      setMoviesList({
        totalPages: message.numberPages,
        movies: message.movies,
      });
    },
  });

  const scrollToTop = () => {
    const element = document.getElementById("movies-page");
    if (element) {
      element.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const paginationChangedHandler = (event, value) => {
    event.stopPropagation();
    fetchMoviesByPage(value);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.moviesPage} id="movies-page">
      <div className={styles.movieCardsContainer}>
        {moviesList.movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <div className={styles.pages}>
        <Stack spacing={2}>
          <Pagination
            count={moviesList.totalPages}
            color="secondary"
            onChange={paginationChangedHandler}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "white",
              },
            }}
          />
        </Stack>
      </div>
    </div>
  );
};

export default MoviesPage;
