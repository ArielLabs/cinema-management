import jsonfile from "jsonfile";

const file = "data/movies.json";

export const getMoviesFromFile = async () => {
  return await jsonfile.readFile(file);
};
