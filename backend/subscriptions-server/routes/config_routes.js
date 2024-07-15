import moviesR from "./moviesRouter.js";
import membersR from "./membersRouter.js";
import subscriptionsR from "./subscriptionsRouter.js";

export const routesInit = (app) => {
  app.use("/api/movies", moviesR);
  app.use("/api/members", membersR);
  app.use("/api/subscriptions", subscriptionsR);
};
