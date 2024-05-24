import { SUBSCRIPTIONS_API } from "../environment.js";
import axios from "axios";

export const getMovies = async (page) => {
  const response = await axios.get(`${SUBSCRIPTIONS_API}/movies`, {
    params: { page },
  });
  const { message: movies } = response.data;
  return movies;
};

export const createMovie = async (movie) => {
  const { data } = await axios.post(`${SUBSCRIPTIONS_API}/movies`, movie);
  return data.message;
};
