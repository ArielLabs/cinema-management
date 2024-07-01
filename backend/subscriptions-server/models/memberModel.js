import { Schema, model } from "mongoose";

const memberSchema = new Schema(
  {
    Name: String,
    Email: String,
    City: String,
    Phone: String
  },
  {
    versionKey: false,
  }
);

const memberModel = model("members", memberSchema, "members");

export default memberModel;