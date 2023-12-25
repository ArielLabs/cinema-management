import { connect } from "mongoose";
import { insertAdmin } from "../BLL/usersBLL.js";
import { DB_HOST, DB_PORT, DB_NAME } from "../environment.js";

export const dbConnect = async () => {
  try {
    await connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
    console.log(`Established connection with users database`);
    await insertAdmin();
  } catch (err) {
    console.log(err);
  }
};
