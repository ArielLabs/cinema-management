import { connect } from "mongoose";
import { insertAdmin, hasUsers } from "../BLL/usersBLL.js";
import { DB_HOST_DEV, DB_HOST_PROD, DB_PORT, DB_NAME } from "../environment.js";

export const dbConnect = async () => {
  try {
    const DB_HOST = process.env.NODE_ENV === 'development' ? DB_HOST_DEV : DB_HOST_PROD;
    await connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
    console.log(`Established connection with users database`);

    const hasUsersResult = await hasUsers();
    if (!hasUsersResult) {
      await insertAdmin();
    }

    console.log("The data of the administrator are in a usersDB, users.json and permissions.json");
  } catch (err) {
    console.error("The connection with the users database failed");
  }
};
