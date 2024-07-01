import axios from "axios";
import { SUBSCRIPTIONS_API } from "../environment.js";

export const getMembers = async () => {
  const response = await axios.get(`${SUBSCRIPTIONS_API}/members`);
  const { message: members } = response.data;
  return members;
};
