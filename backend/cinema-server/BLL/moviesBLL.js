import { SUBSCRIPTIONS_API } from "../environment.js";
import axios from "axios";

export const getMovies = async (page) => {
  const response = await axios.get(`${SUBSCRIPTIONS_API}/movies`, {
    params: { page },
  });
  const { message: movies } = response.data;
  return movies;
};

export const getMovie = async (id) => {
  const { data } = await axios.get(`${SUBSCRIPTIONS_API}/movies/${id}`);
  return data.message;
};

export const createMovie = async (movie) => {
  const { data } = await axios.post(`${SUBSCRIPTIONS_API}/movies`, movie);
  return data.message;
};

export const updateMovie = async (id, movie) => {
  const { data } = await axios.put(`${SUBSCRIPTIONS_API}/movies/${id}`, movie);
  return data.message;
};
