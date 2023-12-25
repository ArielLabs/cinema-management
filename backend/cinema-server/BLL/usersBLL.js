import userModel from "../models/userModel.js";
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
  const { _id } =  await userAdmin.save();
  return _id;
};
