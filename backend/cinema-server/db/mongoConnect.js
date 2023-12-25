import { connect } from "mongoose";
import { insertAdmin } from "../BLL/usersBLL.js";
import { details, permissions } from "../constants/admin.js";
import { initialPermissions } from "../DAL/permissionsFile.js";
import { DB_HOST, DB_PORT, DB_NAME } from "../environment.js";

export const dbConnect = async () => {
  try {
    await connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
    console.log(`Established connection with users database`);
    const adminId = await insertAdmin();
    const permissionsAdmin = {
      Id: adminId,
      Permissions: permissions,
    };
    await initialPermissions(permissionsAdmin);
  } catch (err) {
    console.log(err);
  }
};
