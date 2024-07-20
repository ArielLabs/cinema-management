import { Schema, model } from "mongoose";

const subscriptionSchema = new Schema(
  {
    MemberId: {
      type: Schema.Types.ObjectId,
      ref: "members",
    },
    Screenings: {
      type: [Schema.Types.ObjectId],
      ref: "screenings",
    },
  },
  {
    versionKey: false,
  }
);

const subscriptionModel = model(
  "subscriptions",
  subscriptionSchema,
  "subscriptions"
);

export default subscriptionModel;
