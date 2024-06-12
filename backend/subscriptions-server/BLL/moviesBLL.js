import movieModel from "../models/movieModel.js";
import { getMoviesFromFile } from "../DAL/moviesFile.js";

export const insertMovies = async () => {
  const { movies: allMovies } = await getMoviesFromFile();

  const movies = allMovies.map((movie) => {
    return {
      Name: movie.name,
      Plot: movie.plot,
      Genres: movie.genres,
      Image: movie.image,
      Trailer: movie.trailer,
      Runtime: movie.runtime,
      Premiered: movie.premiered,
      Language: movie.language,
      AgeRestriction: movie.ageRestriction,
    };
  });

  await movieModel.insertMany(movies);
};

export const hasMovies = async () => {
  const countMovies = await movieModel.countDocuments({});
  return countMovies > 0;
};

export const getMovies = async (page, search) => {
  const documentsPerPage = 8;

  const matchCondition = search
    ? { Name: { $regex: search, $options: "i" } }
    : {};

  const pipelineCount = [{ $match: matchCondition }, { $count: "totalMovies" }];

  const pipelinePagination = [
    { $match: matchCondition },
    { $skip: (page - 1) * documentsPerPage },
    { $limit: documentsPerPage },
  ];

  const [resultCount, resultMovies] = await Promise.all([
    movieModel.aggregate(pipelineCount),
    movieModel.aggregate(pipelinePagination),
  ]);

  const pages = Math.ceil(resultCount[0].totalMovies / documentsPerPage);
  return { numberPages: pages, movies: resultMovies };
};

export const getMovie = async (id) => {
  return await movieModel.findById(id);
};

export const createMovie = async (movie) => {
  const newMovie = new movieModel(movie);
  await newMovie.save();
  return "Saved successfully!";
};

export const updateMovie = async (id, movie) => {
  return await movieModel.findByIdAndUpdate(id, movie);
};

export const deleteMovie = async (id) => {
  return await movieModel.findByIdAndDelete(id);
};
