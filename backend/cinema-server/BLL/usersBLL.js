import userModel from "../models/userModel.js";
import { initialUsers } from "../DAL/usersFile.js";
import { initialPermissions } from "../DAL/permissionsFile.js";
import { personalInfo, permissions } from "../constants/admin.js";
import { ADMIN_USERNAME, ADMIN_PASSWORD } from "../environment.js";
import { hash } from "bcrypt";

export const insertAdmin = async () => {
  const saltRounds = 10;
  const password = await hash(ADMIN_PASSWORD, saltRounds);

  const admin = {
    UserName: ADMIN_USERNAME,
    Password: password,
  };

  const userAdmin = new userModel(admin);
  const { _id } = await userAdmin.save();
  
  const detailsAdmin = {
    Id: _id,
    ...personalInfo
  };

  const permissionsAdmin = {
    Id: _id,
    Permissions: permissions,
  };

  await Promise.all([
    initialUsers(detailsAdmin),
    initialPermissions(permissionsAdmin),
  ]);
};

export const hasUsers = async () => {
  const usersCount = await userModel.countDocuments();
  return usersCount > 0;
};
