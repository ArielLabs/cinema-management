import { Schema, model } from "mongoose";

const movieSchema = new Schema(
  {
    Name: String,
    Genres: [String],
    Image: String,
    Premiered: Date,
  },
  {
    versionKey: false,
  }
);

const movieModel = model("movies", movieSchema, "movies");

export default movieModel;
