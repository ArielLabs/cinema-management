import subscriptionModel from "../models/subscriptionModel.js";
import screeningModel from "../models/screeningModel.js";

export const getSubscribers = async () => {
  return await subscriptionModel
    .find({})
    .populate({
      path: "MemberId",
      model: "members",
    })
    .populate({
      path: "Screenings",
      model: "screenings",
      populate: { path: "MovieId", model: "movies", select: "Name" },
    });
};

export const getUnsubscribeMovies = async (id) => {
  const subscription = await subscriptionModel
    .findOne({ MemberId: id })
    .populate("Screenings");

  const subscriptionMoviesIds = subscription
    ? subscription.Screenings.map((screening) => screening.MovieId)
    : [];

  const unsubscribeMovies = await screeningModel
    .find({
      MovieId: { $nin: subscriptionMoviesIds },
    })
    .populate({ path: "MovieId", select: "Name" });

  return {
    subscriptionId: subscription ? subscription._id : null,
    moviesWithScreenings: unsubscribeMovies,
  };
};

export const createSubscription = async (subscription) => {
  const newSubscription = new subscriptionModel(subscription);
  await newSubscription.save();
  return "Saved successfully!";
};

export const updateSubcription = async (id, subscription) => {
  await subscriptionModel.findByIdAndUpdate(id, {
    $push: { Screenings: subscription.Screenings},
  });
  return "Saved successfully!";
};
