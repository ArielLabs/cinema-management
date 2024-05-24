import { Schema, model } from "mongoose";

const movieSchema = new Schema(
  {
    Name: String,
    Plot: String,
    Genres: [String],
    Image: String,
    Trailer: String,
    Runtime: Number,
    Premiered: Date,
    Language: String,
    AgeRestriction: String
  },
  {
    versionKey: false,
  }
);

const movieModel = model("movies", movieSchema, "movies");

export default movieModel;
