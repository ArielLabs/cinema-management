import subscriptionModel from "../models/subscriptionModel.js";
import screeningModel from "../models/screeningModel.js";

export const getUnsubscribeMovies = async (id) => {
  const subscription = await subscriptionModel.findOne({ MemberId: id });
  const subscriptionMoviesIds = subscription
    ? subscription.Movies.map((movie) => movie._id)
    : [];

  const unsubscribeMovies = await screeningModel
    .find({
      MovieId: { $nin: subscriptionMoviesIds },
    })
    .populate({ path: "MovieId", select: "Name" });

  return unsubscribeMovies;
};
