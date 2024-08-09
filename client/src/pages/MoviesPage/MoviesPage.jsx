import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { searchActions } from "../../store/search";
import { axiosInstance } from "../../utils/http";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import {
  Pagination,
  Stack,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { permissions } = useSelector((state) => state.auth);
  const { page: currentPage, chars: currentChars } = useSelector(
    (state) => state.search
  );
  const [moviesList, setMoviesList] = useState({ totalPages: 0, movies: [] });
  const [textSearch, setTextSearch] = useState(currentChars);

  useEffect(() => {
    scrollToTop();
  }, [moviesList]);

  const fetchMovies = async (searchDetails) => {
    try {
      const { page, chars } = searchDetails;
      const pageNumber = page ? page : currentPage;
      const filterByChars = chars ? chars : currentChars;
      return await axiosInstance.get("movies", {
        params: { page: pageNumber, search: filterByChars },
      });
    } catch (err) {
      const { status } = err.response;
      if (status === 401 || status === 403) {
        navigate("/login");
      }
    }
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

  const { mutate: fetchMoviesByEvent } = useMutation({
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
    dispatch(searchActions.setSearch({ chars: currentChars, page: value }));
    fetchMoviesByEvent({ page: value });
  };

  const newMovieHandler = () => {
    navigate("new");
  };

  const searchInputChangedHandler = (event) => {
    setTextSearch(event.target.value);
  };

  const searchInputKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      const searchInput = event.target.value;
      dispatch(searchActions.setSearch({ page: 1, chars: searchInput }));
      fetchMoviesByEvent({ page: 1, chars: searchInput });
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.moviesPage} id="movies-page">
      <div className={styles.actionsContainer}>
        <div className={styles.actions}>
          {permissions.movies.includes("Create") && (
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
          )}
          <FormControl variant="outlined" size="small">
            <InputLabel sx={{ color: "#646cff" }}>Search</InputLabel>
            <OutlinedInput
              label="Search"
              autoComplete="off"
              value={textSearch}
              onChange={searchInputChangedHandler}
              onKeyDown={searchInputKeyDownHandler}
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
            page={currentPage}
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
