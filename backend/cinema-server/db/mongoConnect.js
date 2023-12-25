import { connect } from "mongoose";
import { DB_HOST, DB_PORT, DB_NAME } from "../environment.js";

export const dbConnect = async () => {
  try {
    await connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
    console.log(`Established connection with users database`);
  } catch (err) {
    console.log(err);
  }
};
