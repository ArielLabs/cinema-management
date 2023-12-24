import { Schema, model } from "mongoose";

const subscriptionSchema = new Schema({
  MemberId: Schema.Types.ObjectId,
  Movies: [{ movieId: Schema.Types.ObjectId, date: Date }]
});

const subscriptionModel = model("subscriptions", subscriptionSchema, "subscriptions");

export default subscriptionModel;