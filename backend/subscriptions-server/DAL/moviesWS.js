import axios from "axios";

const moviesURL = "https://api.tvmaze.com/shows";

export const getMoviesFromAPI = async () => {
  return axios.get(moviesURL);
};
