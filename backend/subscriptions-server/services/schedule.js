import { CronJob } from "cron";
import movieModel from "../models/movieModel.js";
import screeningModel from "../models/screeningModel.js";

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const getDate = (offset) => {
  const today = new Date();
  today.setDate(today.getDate() + offset);
  return today;
};

const screeningDay = (moviesIds, date) => {
  const HALLS = ["A", "B", "C", "D"];
  const HOURS = ["11:00", "14:30", "18:00", "21:30"];

  const movies = [...moviesIds];

  const halls = [];
  for (let i = 0; i < HALLS.length; i++) {
    const hours = [];
    for (let j = 0; j < HOURS.length; j++) {
      const moviesNum = movies.length;
      const randIdx = getRandomNumber(moviesNum);
      hours.push({
        MovieId: movies[randIdx],
        Hall: HALLS[i],
        Hour: HOURS[j],
        Date: date,
      });
      movies.splice(randIdx, 1);
    }
    halls.push(...hours);
  }
  return halls;
};

export const insertScreenings = async () => {
  const moviesId = await movieModel.find({}, "_id");
  const ids = moviesId.map((movie) => movie._id);

  const days = [];
  for (let n = 1; n < 8; n++) {
    const date = getDate(n);
    if (date.getDay() !== 5 && date.getDay() !== 6) {
      const screenings = screeningDay(ids, date);
      days.push(...screenings);
    }
  }
  await screeningModel.insertMany(days);
};

const updateScreenings = async () => {
  const moviesId = await movieModel.find({}, "_id");
  const ids = moviesId.map((movie) => movie._id);

  const weekOffset = 7;
  const date = getDate(weekOffset);
  const screenings = screeningDay(ids, date);
  await screeningModel.insertMany(screenings);
};

CronJob.from({
  cronTime: "0 0 * * 0-4",
  onTick: function () {
    updateScreenings().then(() => {
      console.log("The screening dates have been updated");
    });
  },
  start: true,
  timeZone: "Asia/Jerusalem",
});
