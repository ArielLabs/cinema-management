import authR from "./authRouter.js";
import usersR from "./usersRouter.js";
import moviesR from "./moviesRouter.js";
import membersR from "./memberRouter.js";

export const routesInit = (app) => {
  app.use("/api/auth", authR);
  app.use("/api/users", usersR);
  app.use("/api/movies", moviesR);
  app.use("/api/members", membersR);
};
