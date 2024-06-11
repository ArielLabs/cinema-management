import { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/http";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const navigate = useNavigate();
  const [moviesList, setMoviesList] = useState({ totalPages: 0, movies: [] });
  const [searchMovies, setSearchMovies] = useState("");

  useEffect(() => {
    scrollToTop();
  }, [moviesList]);

  const fetchMovies = async (page) => {
    const pageNumber = typeof page === "object" ? 1 : page;
    return await axiosInstance.get("movies", {
      params: { page: pageNumber, search: searchMovies },
    });
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

  const newMovieHandler = () => {
    navigate("new");
  };

  const searchInputChangedHandler = (event) => {
    if (event.key === "Enter") {
      setSearchMovies(event.target.value);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.moviesPage} id="movies-page">
      <div className={styles.actionsContainer}>
        <div className={styles.actions}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              textTransform: "none",
              backgroundColor: "#646cff",
              "&:hover": {
                backgroundColor: "#4a54fb",
              },
            }}
            onClick={newMovieHandler}
          >
            New Movie
          </Button>
          <FormControl variant="outlined" size="small">
            <InputLabel sx={{ color: "#646cff" }}>Search</InputLabel>
            <OutlinedInput
              label="Search"
              autoComplete="off"
              onKeyDown={searchInputChangedHandler}
              sx={{
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#646cff",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#646cff",
                },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" sx={{ color: "#646cff" }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </div>
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
