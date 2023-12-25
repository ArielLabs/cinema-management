import moviesR from "./moviesRouter.js";

export const routesInit = (app) => {
  app.use("/api/movies", moviesR);
};
