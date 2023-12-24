import axios from "axios";

const moviesURL = "https://api.tvmaze.com/shows";

export const getMovies = async () => {
  return axios.get(moviesURL);
};
