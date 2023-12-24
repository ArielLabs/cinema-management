import movieModel from "../models/movieModel.js";
import { getMovies } from "../DAL/moviesWS.js";

export const insertMovies = async () => {
  const { data: allMovies } = await getMovies();

  const movies = allMovies.map((movie) => {
    return {
      Name: movie.name,
      Genres: movie.genres,
      Image: movie.image.medium,
      Premiered: movie.premiered,
    };
  });

  await movieModel.insertMany(movies);
};

export const hasMovies = async () => {
  const countMovies = await movieModel.countDocuments({});
  return countMovies > 0;
};
