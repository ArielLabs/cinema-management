import moviesR from "./moviesRouter.js";
import membersR from "./membersRouter.js";

export const routesInit = (app) => {
  app.use("/api/movies", moviesR);
  app.use("/api/members", membersR);
};
