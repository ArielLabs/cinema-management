import axios from "axios";
import { SUBSCRIPTIONS_API } from "../environment.js";

export const getUnsubscribeMovies = async (id) => {
  const response = await axios.get(`${SUBSCRIPTIONS_API}/subscriptions/${id}/unsubscribe`);
  const { message } = response.data;
  return message;
};