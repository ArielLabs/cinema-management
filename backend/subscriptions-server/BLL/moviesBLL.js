import movieModel from "../models/movieModel.js";
import subscriptionModel from "../models/subscriptionModel.js";
import { getMoviesFromFile } from "../DAL/moviesFile.js";
import screeningModel from "../models/screeningModel.js";

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

  if (resultMovies.length === 0) {
    return { numberPages: 0, movies: [] };
  }

  const pages = Math.ceil(resultCount[0].totalMovies / documentsPerPage);
  return { numberPages: pages, movies: resultMovies };
};

export const getMovie = async (id) => {
  return await movieModel.findById(id);
};

export const getMovieSubscribers = async (id) => {
  const subscriptions = await subscriptionModel
    .find({})
    .populate({
      path: "MemberId",
      model: "members",
    })
    .populate({
      path: "Screenings",
      model: "screenings",
    });

  const subscribers = subscriptions
    .filter((s) => s.Screenings.some((m) => m.MovieId == id))
    .map((element) => {
      return {
        id: element.MemberId._id,
        name: element.MemberId.Name,
        date: element.Screenings[0].Date,
      };
    });

  return subscribers;
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
  const screeningsOfMovie = await screeningModel.find({ MovieId: id });
  const screeningIdsOfMovie = screeningsOfMovie.map(
    (screening) => screening._id
  );

  await subscriptionModel.updateMany(
    { Screenings: { $in: screeningIdsOfMovie } },
    { $pull: { Screenings: { $in: screeningIdsOfMovie } } }
  );
  
  await screeningModel.deleteMany({ MovieId: id });
  await movieModel.findByIdAndDelete(id);
  return "Deleted successfully!";
};
