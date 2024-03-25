import userModel from "../models/userModel.js";
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

  return jwt.sign({ id: user._id, email: user.Email }, SECRET_KEY, {
    expiresIn: "20min",
  });
};

export const registeration = async (email, password) => {
  const user = await userModel.findOne({ Email: email });
  if (!user) {
    throw new Error("User does not exist");
  }

  const hashPassowrd = await hash(password, 10);
  await user.updateOne({ Password: hashPassowrd });
};
