import authR from "./authRouter.js";

export const routesInit = (app) => {
  app.use("/api/auth", authR);
};
