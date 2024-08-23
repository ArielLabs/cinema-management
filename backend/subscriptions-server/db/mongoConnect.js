import { connect } from "mongoose";
import { insertMembers, hasMembers } from "../BLL/membersBLL.js";
import { insertMovies, hasMovies } from "../BLL/moviesBLL.js";
import { DB_HOST_DEV, DB_HOST_PROD, DB_PORT, DB_NAME } from "../environments.js";
import { insertScreenings } from "../services/schedule.js";

export const dbConnect = async () => {
  try {
    const DB_HOST = process.env.NODE_ENV === 'development' ? DB_HOST_DEV : DB_HOST_PROD;
    await connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
    console.log(`Established connection with subscriptions database`);
    const hasData = await Promise.all([hasMembers(), hasMovies()]);
    if (!hasData[0]) {
      await insertMembers();
    }
    if (!hasData[1]) {
      await insertMovies();
      await insertScreenings();
    }
    console.log(
      "The data of the members and the movies are in a subscriptions database"
    );
  } catch (err) {
    console.error("The connection with the subscriptions database failed");
  }
};
