import { Schema, model } from "mongoose";

const screeningScema = new Schema(
  {
    MovieId: {
      type: Schema.Types.ObjectId,
      ref: "movies",
    },
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
