import authR from "./authRouter.js";
import usersR from "./usersRouter.js";
import moviesR from "./moviesRouter.js";

export const routesInit = (app) => {
  app.use("/api/auth", authR);
  app.use("/api/users", usersR);
  app.use("/api/movies", moviesR);
};
