import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    UserName: String,
    Password: String,
  },
  {
    versionKey: false,
  }
);

const userModel = model("users", userSchema, "users");

export default userModel;
