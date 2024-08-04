import userModel from "../models/userModel.js";
import { readPermissions } from "../DAL/permissionsFile.js";
import { readUsers } from "../DAL/usersFile.js";
import jwt from "jsonwebtoken";
import { compare, hash } from "bcrypt";
import { SECRET_KEY } from "../environment.js";

export const authentication = async (email, password) => {
  const user = await userModel.findOne({ Email: email });
  if (!user) {
    throw new Error("User does not exist");
  }

  const isPasswordCorrect = await compare(password, user.Password);
  if (!isPasswordCorrect) {
    throw new Error("Wrong password");
  }

  const token = jwt.sign({ id: user._id, email: user.Email }, SECRET_KEY, {
    expiresIn: "20min",
  });

  const { users } = await readUsers();
  const userDetails = users.find((u) => u._id === (user._id).toString());

  const { permissions } = await readPermissions();
  const { Permissions: userPermissions } = permissions.find(
    (p) => p._id === (user._id).toString()
  );

  return {
    token: token,
    role: userDetails.Role,
    fullName: `${userDetails.FirstName} ${userDetails.LastName}`,
    permissions: userPermissions
  };
};

export const registeration = async (email, password) => {
  const user = await userModel.findOne({ Email: email });
  if (!user) {
    throw new Error("User does not exist");
  }

  const hashPassowrd = await hash(password, 10);
  await user.updateOne({ Password: hashPassowrd });
};
