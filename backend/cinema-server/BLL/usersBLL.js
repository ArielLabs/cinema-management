import userModel from "../models/userModel.js";
import { initialUsers, writeUser } from "../DAL/usersFile.js";
import {
  initialPermissions,
  writePermissions,
} from "../DAL/permissionsFile.js";
import { personalInfo, permissions } from "../constants/admin.js";
import { ADMIN_EMAIL, ADMIN_PASSWORD } from "../environment.js";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";

export const insertAdmin = async () => {
  const saltRounds = 10;
  const password = await hash(ADMIN_PASSWORD, saltRounds);

  const admin = {
    Email: ADMIN_EMAIL,
    Password: password,
  };

  const userAdmin = new userModel(admin);
  const { _id } = await userAdmin.save();

  const detailsAdmin = {
    Id: _id,
    ...personalInfo,
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

export const createUser = async (newUser) => {
  const { FirstName, LastName, Email, SessionTimeOut, Permissions } = newUser;
  const tempPassword = await hash(uuidv4(), 10);

  const user = await userModel.findOne({Email: Email});
  if(user){
    throw new Error("User already exists");
  }

  const docUser = new userModel({ Email: Email, Password: tempPassword });
  const { _id } = await docUser.save();

  const detailsUser = {
    Id: _id,
    FirstName,
    LastName,
    SessionTimeOut,
    CreatedDate: new Date().toLocaleString(),
  };

  const detailsPermissions = {
    Id: _id,
    Permissions,
  };

  await Promise.all([
    writeUser(detailsUser),
    writePermissions(detailsPermissions),
  ]);

  return "Saved successfully!"
};
