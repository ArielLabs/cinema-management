import { Schema, model } from "mongoose";

const screeningScema = new Schema(
  {
    MovieId: Schema.Types.ObjectId,
    Date: Date,
    Hour: String,
    Hall: String,
  },
  {
    versionKey: false,
  }
);

const screeningModel = model("screenings", screeningScema, "screenings");

export default screeningModel;
