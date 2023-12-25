import movieModel from "../models/movieModel.js";
import { getMoviesFromAPI } from "../DAL/moviesWS.js";

export const insertMovies = async () => {
  const { data: allMovies } = await getMoviesFromAPI();

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

export const getMovies = async () => {
  return await movieModel.find({});
};

export const getMovie = async (id) => {
  return await movieModel.findById(id);
};

export const createMovie = async (movie) => {
  const newMovie = new movieModel(movie);
  await newMovie.save();
};

export const updateMovie = async (id, movie) => {
  return await movieModel.findByIdAndUpdate(id, movie);
};

export const deleteMovie = async (id) => {
  return await movieModel.findByIdAndDelete(id);
};
