import { SUBSCRIPTIONS_API } from "../environment.js";
import axios from "axios";

export const getMovies = async (page) => {
  const response = await axios.get("http://localhost:3000/api/movies", {
    params: { page },
  });
  const { message: movies } = response.data;
  return movies;
};
