import { connect } from "mongoose";
import { insertMembers, hasMembers } from "../BLL/membersBLL.js";
import { DB_HOST, DB_PORT, DB_NAME } from "../environments.js";

export const dbConnect = async () => {
  try {
    await connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
    console.log(`Established connection with subscriptions database`);
    const resultHasMembers = await hasMembers();
    if (!resultHasMembers) {
      await insertMembers();
    }
  } catch (err) {
    console.log("The connection with the subscriptions database failed");
  }
};
