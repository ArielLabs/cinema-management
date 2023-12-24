import mongoose from "mongoose";
import { DB_HOST, DB_PORT, DB_NAME } from "../environments.js";

export const dbConnect = async () => {
  mongoose
    .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
    .then(() => {
      console.log(`Established connection with subscriptions database`);
    })
    .catch((err) => {
      console.log(err);
    });
};
