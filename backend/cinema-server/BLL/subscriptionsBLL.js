import axios from "axios";
import { SUBSCRIPTIONS_API } from "../environment.js";

export const getUnsubscribeMovies = async (id) => {
  const response = await axios.get(`${SUBSCRIPTIONS_API}/subscriptions/${id}/unsubscribe`);
  const { message } = response.data;
  return message;
};

export const createSubscription = async (subscription) => {
  const response = await axios.post(`${SUBSCRIPTIONS_API}/subscriptions`, subscription);
  const { message } = response.data;
  return message;
};

export const updateSubcription = async (id, subscription) => {
  const response = await axios.put(`${SUBSCRIPTIONS_API}/subscriptions/${id}`, subscription);
  const { message } = response.data;
  return message;
};
