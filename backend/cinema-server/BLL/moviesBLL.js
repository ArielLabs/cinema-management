import { getSubscriptionsApi } from "../utils/api.js";
import axios from "axios";

const SUBSCRIPTIONS_API = getSubscriptionsApi();

export const getMovies = async (page, search) => {
  const response = await axios.get(`${SUBSCRIPTIONS_API}/movies`, {
    params: { page, search },
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

export const deleteMovie = async (id) => {
  const { data } = await axios.delete(`${SUBSCRIPTIONS_API}/movies/${id}`);
  return data.message;
};
