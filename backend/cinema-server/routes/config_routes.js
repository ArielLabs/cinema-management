import authR from "./authRouter.js";
import usersR from "./usersRouter.js";
import moviesR from "./moviesRouter.js";
import membersR from "./memberRouter.js";
import subscriptionsR from "./subscriptionsRouter.js";
import { verifyToken } from "../middlewares/auth.js";

export const routesInit = (app) => {
  app.use("/api/auth", authR);
  app.use("/api/users", verifyToken, usersR);
  app.use("/api/movies", verifyToken, moviesR);
  app.use("/api/members", verifyToken, membersR);
  app.use("/api/subscriptions", verifyToken, subscriptionsR);
};
